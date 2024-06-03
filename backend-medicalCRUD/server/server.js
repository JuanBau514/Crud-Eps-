import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import jwt from "jsonwebtoken";
import { AuthController } from "../controller/AuthenticationController.js";
import { PatientController } from "../controller/PatientController.js";
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
  const {id_usuario} = req.body; // Usamos query en lugar de body para GET
  console.log(id_usuario);
  try {
    const result = await PatientController.getPatient(id_usuario);
    console.log("Datos para envíar" + result);
    res.json(result);
    res.status(200);
  } catch (error) {
    console.error("Error en traer data:", error);
    res.status(500).send("Data vacia: " + error.message);
  }
});

app.post("/perfil", async (req, res) => {
  const { id_usuario, nombres, apellidos, direccion_re } = req.body;
  try {
    const result = await PatientController.modificatedPatient(id_usuario, {
      nombres,
      apellidos,
      direccion_re,
    });
  } catch (error) {
    console.error("Error al catualizar:", error);
    res.status(500).send("Error: " + error.message);
  }
});

export default app;
