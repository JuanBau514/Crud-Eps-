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

app.post('/register', (req, res) => {
    console.log('Entrando a /register');
    const { email, password } = req.body;
    try {
        console.log(`Registrando ${email} y ${password}`);
        AuthController.createAccount(email, password);
        res.status(201).send('Usuario registrado con éxito, revisa tu correo para ver la kongfirmación');
    }catch(error) {
        res.status(500).send('Imposible flaco hubo un error');
        console.log(error);
    }  
    
});

export default app;