import User from '../models/User.js';
import Token from '../models/Token.js';
import { hashPassword } from '../utils/auth.js';
import { generarToken } from '../utils/tokenG.js';
import { SendEmail } from '../emails/SendEmail.js';
import UserDAO from '../models/UserDAO.js';

const instanciaUserConsult = new UserDAO();
export class AuthController {
    static createAccount = async (email, pass) => {
        try {
            //un usuario no está activo si no está verificado
            //verificar si ya hay un correo
            const minusEmail = email.toLowerCase();
            const verifyEmail = await instanciaUserConsult.searchByEmail(minusEmail);
            if (verifyEmail) {
                throw new Error ("Ya hay un correo registrado");
            }
            // Hash Password
            const passHash = await hashPassword(pass);

            // Crea un usuario
            const usuarioPrueba = new User({
                id_usuario: 13000,
                correo_usuario: minusEmail,
                password: passHash,
                estado: 0,
                token: " "
            });

            // Generar el token, el id debe ser consultado en la bd y traido acá
            //c inserts y lo demás
            
            const userMat = await instanciaUserConsult.create(usuarioPrueba);
            
            const token = new Token({
                token: generarToken(),
                userID: userMat.insertId,
                createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
            });
            usuarioPrueba.token = token.token;
            usuarioPrueba.id_usuario = userMat.insertId;
            
            //actualizar usuario con el token
            await instanciaUserConsult.update(usuarioPrueba);

            await instanciaUserConsult.close();
            // enviar el email
            await SendEmail.sendConfirmationEmail(usuarioPrueba, token);
            console.log('Cuenta creada, revisa tu email para confirmarla');
            
        } catch (error) {
            console.error("Error creating account:", error);
            throw new Error(error.message);
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

    static loginAccount = async (req, res) => {

    }

}