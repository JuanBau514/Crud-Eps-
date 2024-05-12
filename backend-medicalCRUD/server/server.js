import dotenv from "dotenv"
dotenv.config();
import express from 'express';
import morgan from 'morgan';
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
        const user = await instanciaUserConsult.getUserById(userId);
        if (!user) {
            return res.status(404).send('Usuario no encontrado.');
        }
        if (user.token !== token) {
            return res.status(400).send('Token inválido.');
        }

        // Activar la cuenta
        await instanciaUserConsult.activateUser(userId);
        res.send('Cuenta activada exitosamente.');
    } catch (error) {
        console.error('Error al confirmar la cuenta:', error);
        res.status(500).send('Error interno del servidor.');
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

export default app;