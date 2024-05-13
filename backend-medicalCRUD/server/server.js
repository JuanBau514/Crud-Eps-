import dotenv from "dotenv"
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { AuthController } from '../controller/AuthenticationController.js';
//import router from '../routes/authRoutes.js'
//const authRouter = router();
const app = express();
//Database.getInstance();

// Logging
app.use(morgan('dev'));

// Leer datos de formularios
app.use(express.json());

//static
app.use(express.static('public'));

//url actual
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes

app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  });

app.post('/register', async (req, res) => {
    console.log('Entrando a /register');
    const { email, password } = req.body;
    try {
        console.log(`Registrando ${email} y ${password}`);
        await AuthController.createAccount(email, password);
        res.status(201).send('Usuario registrado con éxito, revisa tu correo para ver la confirmación');
    } catch(error) {
        console.log('Error en la creación de cuenta:', error);
        res.status(500).send(error.message);
    }   
});

app.get('/confirm', async (req, res) => {
    const { token, userId } = req.query;
    try {
        console.log(`Preparando formulario de confirmación de cuenta para token ${token} y ID ${userId}`);
        //Verificar que el token y el usuario son válidos antes de enviar el formulario
        const isValid = await AuthController.verifyTokenAndUser(token, userId);
        if (!isValid) {
            return res.status(400).send('Token inválido o expirado');
        }
        // redirigr al archivo html
        const filePath = path.join(__dirname, '..', 'public', 'registrop.html');
        console.log("Intentando enviar archivo:", filePath);
        res.sendFile(filePath, (err) => {
            if (err) {
            console.error("Error al enviar el archivo:", err);
            return res.status(500).send("No se pudo enviar el archivo.");
            }
        });

    } catch (error) {
        console.error('Error preparando el registro de cuenta:', error);
        res.status(500).send(error.message);
    }
});

app.post('/registerP', async(req, res) => {
    const { token, paciente } = req.body;
    console.log('Entrando a /registerP');
    try {
        console.log(`Registrando como paciente a ${paciente.id_usuario}`);
        await AuthController.register(token, paciente);
        res.status(201).send('Se ha registrado de manera exitosa, volverás al login en 5 segundos');
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).send(error.message);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Entrando a /login');
    try {
        console.log(`Iniciando sesión de ${email} y ${password}`);
        
        await AuthController.loginAccount(email, password);
        res.status(201).send('Inicio de sesión exitoso');
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(400).send(error.message);
    }
});

//recuperar contraseña

app.post('/recover', async (req, res) => {
    const { email } = req.body;
    console.log('Entrando a /recover');
    try {
        console.log(`Mandando correo de recuperación de contraseña a ${email}`);
        await AuthController.recoverAccount(email);
        res.status(201).send('Se ha enviado el enlace al correo proporcionado');
    } catch (error) {
        console.error('Error en la recuperación de contraseña:', error);
        res.status(400).send(error.message);
    }
});

app.get('/recoverPass', async (req, res) => {
    const { token, userId } = req.query;
    try {
        console.log(`Preparando formulario de recuperación para token ${token} y ID ${userId}`);
        //Verificar que el token y el usuario son válidos antes de enviar el formulario
        const isValid = await AuthController.verifyTokenAndUser(token, userId);
        if (!isValid) {
            return res.status(400).send('Token inválido o expirado');
        }
        // redirigr al archivo html
        const filePath = path.join(__dirname, '..', 'public', 'recuperarcontra.html');
        console.log("Intentando enviar archivo:", filePath);
        res.sendFile(filePath, (err) => {
            if (err) {
            console.error("Error al enviar el archivo:", err);
            return res.status(500).send("No se pudo enviar el archivo.");
            }
        });

    } catch (error) {
        console.error('Error preparando la recuperación de contraseña:', error);
        res.status(500).send(error.message);
    }
});

//para la interfaz de recuperar contra
app.post('/resetPassword', async (req, res) => {
    const { token, userId, newPassword } = req.body;
    console.log('Entrando a /resetPassword');
    try {
        console.log(`Actualizando Password a ${userId}`);
        await AuthController.resetPassword(token, userId, newPassword);
        res.status(201).send('Se ha enviado la contraseña de manera exitosa, volverás al login en 5 segundos');
    } catch (error) {
        console.error('Error en la recuperación de contraseña:', error);
        res.status(500).send(error.message);
    }
});


export default app;