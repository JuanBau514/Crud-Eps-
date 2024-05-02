
import User from '../models/User.js';
import Token from '../models/Token.js';
import { hashPassword } from '../utils/auth.js';
import { generarToken } from '../utils/tokenG.js';
import { SendEmail } from '../emails/SendEmail.js';

export class AuthController {

    static createAccount = async () => {
        try {
            //un usuario no está activo si no está verificado
            //creando contraseña para prueba
            let pass = 'andreyTonto';
           
            // Hash Password
            pass = await hashPassword(pass);

            // Prevenir duplicados

            // Crea un usuario
            const usuarioPrueba = new User({
                email: 'joeltonto@correo.com',
                password: pass,
                name: 'Joelington',
                active: true
            });

            // Generar el token, el id debe ser consultado en la bd y traido acá
            const token = new Token({
                token: generarToken(),
                userID: 123132,
                createdAt: '2024-05-01 08:41:27',
            });
            // enviar el email
            SendEmail.sendConfirmationEmail(usuarioPrueba, token);

            console.log('Cuenta creada, revisa tu email para confirmarla');
        } catch (error) {
            console.log('Hubo un error');
            console.log(error);
        }
    }


}

AuthController.createAccount();