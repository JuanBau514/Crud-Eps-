import { Router } from 'express';
import { AuthController } from '../controllers/AuthenticationController.js';
const router = Router();

/*router.post('/register', (req, res) => {
    const { email, password } = req.body;
    console.log(`Registrando usuario con email: ${email} y contraseña: ${password}`);
    try {

        //AuthController.createAccount();
        res.status(201).send('Usuario registrado con éxito');
    }catch (error) {
        res.status(500).send('Imposible registrarlo flaco');
    }
    
});
*/
export default router();