import User from '../models/User.js';
import Token from '../models/Token.js';
import { hashPassword } from '../utils/auth.js';
import { generarToken } from '../utils/tokenG.js';
import { SendEmail } from '../emails/SendEmail.js';
//import Database from '../bd/connection.js';


export class AuthController {

    static createAccount = async (email, pass) => {
        try {
            //un usuario no está activo si no está verificado
            //creando contraseña para prueba
            
            // Hash Password
            pass = await hashPassword(pass);

            // Prevenir duplicados

            // Crea un usuario
            const usuarioPrueba = new User({
                email: email,
                password: pass,
                active: false
            });

            // Generar el token, el id debe ser consultado en la bd y traido acá
            //Database.getInstance();
            //c inserts y lo demás
            const idUser = 48568;
            const token = new Token({
                token: generarToken(),
                userID: idUser,
                createdAt: '2024-05-01 08:41:27',
            });
            // enviar el email
            SendEmail.sendConfirmationEmail(usuarioPrueba, token);
            console.table(usuarioPrueba);
            console.table(token);
            console.log('Cuenta creada, revisa tu email para confirmarla');
        } catch (error) {
            console.log('Hubo un error');
            console.log(error);
        }
    }

    static confirmAccount = async (req, res) => {
        try {
            const { token } = req.body;

            const tokenExists = await Token.findOne({ token });
            if (!tokenExists) {
                const error = new Error('Token no válido');
                return res.status(404).json({ error: error.message });
            }

            const user = await User.findById(tokenExists.user);
            user.confirmed = true;

            await Promise.allSettled([user.save(), tokenExists.deleteOne()]);
            res.send('Cuenta confirmada correctamente');
        } catch (error) {
            res.status(500).json({ error: 'Hubo un error' });
            console.log(error);
        }
    }


}