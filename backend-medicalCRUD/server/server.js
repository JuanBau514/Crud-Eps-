import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import { AuthController } from '../controller/AuthenticationController.js';
import { MedicController } from '../controller/MedicController.js';

//import router from '../routes/authRoutes.js'
//const authRouter = router();
const app = express();
//Database.getInstance();

// Logging
app.use(morgan("dev"));

// Leer datos de formularios
app.use(express.json());

//static
app.use(express.static("public"));

// Routes

app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

app.post("/register", async (req, res) => {
  console.log("Entrando a /register");
  const { email, password } = req.body;
  try {
    console.log(`Registrando ${email} y ${password}`);
    await AuthController.createAccount(email, password);
    res
      .status(201)
      .send(
        "Usuario registrado con éxito, revisa tu correo para ver la confirmación..."
      );
  } catch (error) {
    console.log("Error en la creación de cuenta:", error);
    res.status(500).send(error.message);
  }
});

app.get("/confirm", async (req, res) => {
  const { token, userId } = req.query;
  try {
    console.log(
      `Preparando formulario de confirmación de cuenta para token ${token} y ID ${userId}`
    );
    //Verificar que el token y el usuario son válidos antes de enviar el formulario
    const isValid = await AuthController.verifyTokenAndUser(token, userId);
    if (!isValid) {
      return res.status(400).send("Token inválido o expirado");
    }
    // redirigr a register token
    res.redirect(
      `http://localhost:5173/registerToken?token=${encodeURIComponent(
        token
      )}&userId=${encodeURIComponent(userId)}`
    );
  } catch (error) {
    console.error("Error preparando el registro de cuenta:", error);
    res.status(500).send(error.message);
  }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Entrando a /login');
    try {
        console.log(`Iniciando sesión de ${email}`);
        const user = await AuthController.loginAccount(email, password);
        // Genera un token JWT con la información del usuario
        const jwtToken = jwt.sign(
            { id: user.id_usuario, email: user.correo_usuario, type: user.type_user },
            process.env.SECRET_JWT, // Usa la variable de entorno para el secreto
            { expiresIn: '1h' }
        );
        // Enviar el token al cliente
        res.status(200).json({
            message: `Inicio de sesión exitoso, eres ${user.type_user}.`,
            token: jwtToken, // Envía el token para que el cliente lo pueda usar
            type: user.type_user
        });
      
app.post("/registerP", async (req, res) => {
  const { token, paciente } = req.body;
  console.log("Entrando a /registerP");
  try {
    console.log(`Registrando como paciente a ${paciente.id_usuario}`);
    await AuthController.register(token, paciente);
    res
      .status(201)
      .send(
        "Se ha registrado de manera exitosa, volverás al login en 5 segundos"
      );
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).send(error.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Entrando a /login");
  try {
    console.log(`Iniciando sesión de ${email}`);
    const user = await AuthController.loginAccount(email, password);
    // Genera un token JWT con la información del usuario
    const jwtToken = jwt.sign(
      { id: user.id_usuario, email: user.correo_usuario, type: user.type_user },
      process.env.SECRET_JWT, // Usa la variable de entorno para el secreto
      { expiresIn: "1h" }
    );
    // Enviar el token al cliente
    res.status(200).json({
      message: `Inicio de sesión exitoso, eres ${user.type_user}.`,
      token: jwtToken, // Envía el token para que el cliente lo pueda usar
    });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(401).json({ message: error.message });
  }
});

//recuperar contraseña

app.post("/recover", async (req, res) => {
  const { email } = req.body;
  console.log("Entrando a /recover");
  try {
    console.log(`Mandando correo de recuperación de contraseña a ${email}`);
    await AuthController.recoverAccount(email);
    res.status(201).send("Se ha enviado el enlace al correo proporcionado");
  } catch (error) {
    console.error("Error en la recuperación de contraseña:", error);
    res.status(400).send(error.message);
  }
});

app.get("/recoverPass", async (req, res) => {
  const { token, userId } = req.query;
  try {
    console.log(
      `Preparando formulario de recuperación para token ${token} y ID ${userId}`
    );
    //Verificar que el token y el usuario son válidos antes de enviar el formulario
    const isValid = await AuthController.verifyTokenAndUser(token, userId);
    if (!isValid) {
      return res.status(400).send("Token inválido o expirado");
    }
    // redirigr al archivo html
    // redirigr a register token
    res.redirect(
      `http://localhost:5173/passwordToken?token=${encodeURIComponent(
        token
      )}&userId=${encodeURIComponent(userId)}`
    );
    //cristian tonto
    //return res.status(200).send("Se ha hecho de manera exitosa, solo que el perro malparido de cristian se le olvidó el modal");
  } catch (error) {
    console.error("Error preparando la recuperación de contraseña:", error);
    res.status(500).send(error.message);
  }
});

//para la interfaz de recuperar contra
app.post("/resetPassword", async (req, res) => {
  const { token, userId, newPassword } = req.body;
  console.log("Entrando a /resetPassword");
  try {
    console.log(`Actualizando Password a ${userId}`);
    await AuthController.resetPassword(token, userId, newPassword);
    res
      .status(201)
      .send(
        "Se ha enviado la contraseña de manera exitosa, volverás al login en 5 segundos"
      );
  } catch (error) {
    console.error("Error en la recuperación de contraseña:", error);
    res.status(500).send(error.message);
  }
});

//Token jwt

app.post('/JWTSession', async (req, res) => {
    console.log('Entrando a /JWTSession...');
    // Intenta extraer el token de la cabecera 'Authorization'
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No se proporcionó token' });
    }
    const token = authHeader.split(' ')[1];  // Extrae el token del formato 'Bearer <token>'
    try {
        const decoded = await AuthController.validateJWT(token);
        res.json({ success: true, data: decoded });
    } catch (error) {
        console.error('Error en JWTSession:', error);
        res.status(401).json({ success: false, message: 'Token inválido: ' + error.message });
    }
});


/*

ROUTERS PARA MÉDICO 

*/

app.get('/listarCitas', async (req, res) => {
    console.log('Entrando a listarCitas...');
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No se proporcionó token' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = await AuthController.validateJWT(token);
        // El arreglo de citas
        const citas = await MedicController.listarCitasController(decoded.id); // Pasar ID de usuario

        res.json({ success: true, citas: citas }); // Enviar citas al cliente
    } catch (error) {
        console.error('Error en listarCitas:', error);
        res.status(401).json({ success: false, message: 'Token inválido o sesión expirada: ' + error.message });
    }
});

app.post('/modificarExamen/:idCita', async (req, res) => {
    console.log("Entrando a /modificarExamen");
    
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No se proporcionó token' });
    }

    const token = authHeader.split(' ')[1];

    const idCita = req.params.idCita;
    const { nombreExamen, tipoExamen, resultadoExamen } = req.body;
    try {
        const decoded = await AuthController.validateJWT(token);
        //lo de la cita realmente
        await MedicController.examModify(idCita, nombreExamen, tipoExamen, resultadoExamen);
        res.json({ success: true, message: 'Examen actualizado correctamente' });
    } catch (error) {
        console.error('Error al modificar el examen:', error);
        res.status(500).json({ success: false, message: 'Error al modificar el examen' });

  app.post("/JWTSession", async (req, res) => {
  console.log("Entrando a /JWTSession...");
  const jwtToken = req.body.token;
  try {
    const decoded = await AuthController.validateJWT(jwtToken);
    res.json(decoded); // Envía el objeto decodificado directamente
  } catch (error) {
    console.error("Error en JWTSession:", error);
    res.status(401).send("Token inválido: " + error.message);
  }
});

app.get("/perfil", async function (req, res) {
  //Esta bien, asegurar pasar en el body el ID de usuario
  const { id_usuario } = req.body;
  console.log(id_usuario);
  try {
    const result = await PatientController.getPatient(id_usuario);
    console.log("Datos para envíar" + result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error en traer data:", error);
    res.status(500).send("Data vacia: " + error.message);
  }
});

app.post("/perfil", async (req, res) => {
  const { id_usuario, nombres, apellidos, direccion_re, telefono } = req.body;
  try {
    const result = await PatientController.modificatedPatient(id_usuario, {
      nombres,
      apellidos,
      direccion_re,
      telefono,
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error al catualizar:", error);
    res.status(500).send("Error: " + error.message);
  }
});

app.post("/asignar", async (req, res) => {
  const { fecha_hora, id_medico, id_usuario } = req.body;
  try {
    const result = await PatientController.assignDate(id_usuario, {
      fecha_hora,
      id_medico,
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error al asignar:", error);
    res.status(500).send("Error: " + error.message);
  }
});
app.get("/citasPendientes", async (req, res) => {
  const { id_usuario } = req.body;
  console.log(id_usuario);
  try {
    const result = await PatientController.restDates(id_usuario);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error al traer:", error);
    res.status(500).send("Error: " + error.message);
  }
});
app.get("/citasPasadas", async (req, res) => {
    const { id_usuario } = req.body;
    console.log(id_usuario);
    try {
      const result = await PatientController.pastDates(id_usuario);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error al traer:", error);
      res.status(500).send("Error: " + error.message);
    }
  
});

app.post('/actualizarDiagnostico/:idCita', async (req, res) => {
    console.log('Entrando a /actualizarDiagnostico');
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No se proporcionó token' });
    }

    const token = authHeader.split(' ')[1];

    const idCita = req.params.idCita;
    const { descripcion, fechaDiagnostico } = req.body;

    try {
        const decoded = await AuthController.validateJWT(token);
        //act
        await MedicController.actualizarDiagnostico(idCita, descripcion, fechaDiagnostico);
        res.json({ success: true, message: 'Diagnóstico actualizado correctamente.' });
    } catch (error) {
        console.error('Error actualizando el diagnóstico:', error);
        res.status(500).json({ success: false, message: 'Error al actualizar el diagnóstico.' });
    }
});

app.post('/actualizarAsistencia/:idCita', async (req, res) => 
    {
    console.log('Entrando a /actualizarAsistencia');
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No se proporcionó token' });
    }

    const token = authHeader.split(' ')[1];

    const idCita = req.params.idCita;
    const { asistencia } = req.body;

    try {
        const decoded = await AuthController.validateJWT(token);
        //actualizar
        await MedicController.actualizarAsistencia(idCita, asistencia);
        res.json({ success: true, message: 'Asistencia actualizada correctamente.' });
    } catch (error) {
        console.error('Error actualizando la asistencia:', error);
        res.status(500).json({ success: false, message: 'Error al actualizar la asistencia.' });
    }
});

//modificar datos medico

app.get('/datosMedico', async (req, res) => {
    try {
        console.log('Entrando a /datos medico');
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'No se proporcionó token' });
        }
    
        const token = authHeader.split(' ')[1];
        const decoded = await AuthController.validateJWT(token);

        const id_usuario = decoded.id; // el id de usuario está acá
        const datosMedico = await MedicController.obtenerDatosMedico(id_usuario);
        res.json(datosMedico);
    } catch (error) {
        console.error('Error obteniendo datos del médico:', error);
        res.status(500).json({error: 'Error interno del servidor'});
    }
});

app.post('/actualizarMedico', async (req, res) => {
    console.log('Entrando a /actualizarMedico');
    const { id_medico, nombre, direccion, ciudad, especialidad, tipo_licencia, licencia_medica } = req.body;
    const authHeader = req.headers.authorization;
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'No se proporcionó token' });
        }
    
        const token = authHeader.split(' ')[1];
        const decoded = await AuthController.validateJWT(token);

        await MedicController.actualizarDatosMedico(id_medico, nombre, direccion, ciudad, especialidad, tipo_licencia, licencia_medica, decoded.id);
        res.json({ success: true, message: 'Datos actualizados correctamente' });
    } catch (error) {
        console.error('Error al actualizar datos del médico:', error);
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
});


export default app;

