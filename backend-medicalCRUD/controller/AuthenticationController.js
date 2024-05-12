import User from '../models/User.js';
import Token from '../models/Token.js';
import { checkPassword, hashPassword } from '../utils/auth.js';
import { generarToken, hashToken, checkToken } from '../utils/tokenG.js';
import { SendEmail } from '../emails/SendEmail.js';
import { comparaFecha } from '../utils/dateCompare.js';
import UserDAO from '../models/UserDAO.js';

export class AuthController {
    static createAccount = async (email, pass) => {
        try {
            const instanciaUserConsult = new UserDAO();
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
                token: " ",
                token_creado: " "
            });

            // Generar el token, el id debe ser consultado en la bd y traido acá
            //c inserts y lo demás
            
            const userMat = await instanciaUserConsult.create(usuarioPrueba);
            
            const token = new Token({
                token: generarToken(),
                userID: userMat.insertId,
                createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
            });
            usuarioPrueba.token = await hashToken(token.token);
            usuarioPrueba.token_creado = token.createdAt;
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

    static confirmAccount = async (token, userId) => {
        try {
            const instanciaUserConfirm = new UserDAO();
            const objectUser = await instanciaUserConfirm.searchById(userId);
            console.log(objectUser);
            if (!objectUser) {
                throw new Error ('No hay un usuario según las credenciales previstas');
            }
            if (!checkToken(token, objectUser.token)) {
                throw new Error ('El token no es válido');
            }
            const tiempo = await comparaFecha(objectUser.token_creado);
            console.log(tiempo);
            const userBD = new User({
                id_usuario: userId,
                estado: 1,
                token: " ",
                token_creado: " "
            });
            await instanciaUserConfirm.updateToken(userBD);
            await instanciaUserConfirm.close();
            console.log('Confirmación exitosa');

        } catch (error) {
            console.error("Error about confirmAccount:", error);
            throw new Error(error.message);
        }
    }

    static loginAccount = async (email, pass) => {
        try {
            const instanciaUserLogin = new UserDAO();
            const minusEmail = email.toLowerCase();
            const verifyEmail = await instanciaUserLogin.searchByEmail(minusEmail);
            if (!verifyEmail) {
                throw new Error ("No hay un correo en nuestra base de datos");
            } 

            /*if (verifyEmail.estado === 0) {
                throw new Error ("Primero activa tu cuenta");
            }*/
            
            //0 -> paciente, 1 -> médico, 2 -> admin
            if (!await checkPassword(pass, verifyEmail.password)) {
                throw new Error ("Correo y contraseña no válidos");
            }
            /*
            const tipo_usuario = await instanciaUserLogin.searchByTypeUser(minusEmail);
            switch(tipo_usuario.tipo_usuario) {
                case '0':
                    console.log('hola soy paciente');
                    break;
                case '1':
                    console.log('hola soy medico');
                    break;
                case '2':
                    console.log('hola soy admin');
                    break;
                default:
                    console.log('hola soy nadie');
                    throw new Error ('Usuario sin relación');  
            }
            */ 
            await instanciaUserLogin.close();
            console.log('Inicio exitoso');
        }catch (error) {
            console.error("Error about Login:", error);
            throw new Error(error.message);
        }
    }

}