import User from '../models/User.js';
import Token from '../models/Token.js';
import { checkPassword, hashPassword } from '../utils/auth.js';
import { generarToken, hashToken, checkToken } from '../utils/tokenG.js';
import { SendEmail } from '../emails/SendEmail.js';
import { comparaFecha } from '../utils/dateCompare.js';
import UserDAO from '../models/UserDAO.js';
import PacienteDAO from '../models/PacienteDAO.js';

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

    static register = async (token, paciente) => {
        try {
            if (!token || !paciente) {
                throw new Error ('Hay datos incongruentes, vuelva a la página');
            }
            
            const instanciaUserRegisterUser = new UserDAO();
            const objectUser = await instanciaUserRegisterUser.searchById(paciente.id_usuario);
            if (!objectUser) {
                throw new Error ('No hay un usuario según las credenciales previstas');
            }

            if (objectUser.estado === 1) {
                throw new Error ('El usuario no tiene un token pendiente');
            }

            if (!checkToken(token, objectUser.token)) {
                throw new Error ('El token no es válido');
            }
            const tiempo = await comparaFecha(objectUser.token_creado);
            //lógica de vencimiento
            
            if (tiempo > 900) { // 900 segundos son 15 minutos
                console.log(tiempo);
                throw new Error ('El token está vencido, pide otro');
            }
        
            const instanciaPacienteRegister = new PacienteDAO ();

            const pacienteMatR = await instanciaPacienteRegister.create(paciente);
            if (!pacienteMatR) {
                throw new Error('Falló el registro');
            }

            await instanciaPacienteRegister.close();

            await SendEmail.sendWelcomeEmail(objectUser, paciente);

            //cerrar token
            const userBD = new User({
                id_usuario: paciente.id_usuario,
                estado: 1,
                token: " ",
                token_creado: " "
            });
            await instanciaUserRegisterUser.updateToken(userBD);

            await instanciaUserRegisterUser.close();
       
            console.log('Registro exitoso');

        } catch (error) {
            console.error("Error about confirmRecoverAccount:", error);
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

            if (verifyEmail.estado === 0) {
                throw new Error ("Primero activa tu cuenta");
            }
            
            //0 -> paciente, 1 -> médico, 2 -> admin
            if (!await checkPassword(pass, verifyEmail.password)) {
                throw new Error ("Correo y contraseña no válidos");
            }
            
            const tipo_usuario = await instanciaUserLogin.searchByTypeUser(minusEmail);

            await instanciaUserLogin.close();
            if (!tipo_usuario) {
                throw new Error('Usuario sin relación');
            }
            switch(tipo_usuario.tipo_usuario) {
                case '0':
                    console.log('Inicio exitoso');
                    tipo_usuario.tipo_usuario = 'paciente';
                    return tipo_usuario.tipo_usuario;
                case '1':
                    console.log('Inicio exitoso');
                    tipo_usuario.tipo_usuario = 'medico';
                    return tipo_usuario.tipo_usuario;
                case '2':
                    console.log('Inicio exitoso');
                    tipo_usuario.tipo_usuario = 'admin';
                    return tipo_usuario.tipo_usuario;
                default:
                    console.log('hola soy nadie');
                    throw new Error ('Usuario no identificado');  
            }
            
        }catch (error) {
            console.error("Error about Login:", error);
            throw new Error(error.message);
        }
    }

    static recoverAccount = async (email) => {
        try {
            const instanciaUserRecover = new UserDAO();
            const minusEmail = email.toLowerCase();
            const verifyEmail = await instanciaUserRecover.searchByEmail(minusEmail);
            if (!verifyEmail) {
                throw new Error ("No hay un correo en nuestra base de datos");
            } 

            if (verifyEmail.estado === 0) {
                throw new Error ("Primero activa tu cuenta");
            }
            //usuario para actualizar en la bd con el token
            const usuarioUpdateToken = new User({
                id_usuario: verifyEmail.id_usuario,
                estado: 0,
                token: " ",
                token_creado: " "
            });

            // Generar el token
                        
            const token = new Token({
                token: generarToken(),
                userID: usuarioUpdateToken.insertId,
                createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
            });

            usuarioUpdateToken.token = await hashToken(token.token);
            usuarioUpdateToken.token_creado = token.createdAt;
            usuarioUpdateToken.correo_usuario = minusEmail;

            await instanciaUserRecover.updateToken(usuarioUpdateToken);

            await instanciaUserRecover.close();

            await SendEmail.sendPasswordResetEmail(usuarioUpdateToken, token);

            console.log('Correo de recuperación enviado de manera exitosa');
        }catch (error) {
            console.error("Error about RecoverPass:", error);
            throw new Error(error.message);
        }
    }

    static recoverPassAccount = async (token, userId) => {
        try {
            
            const instanciaUserConfirm = new UserDAO();
            const objectUser = await instanciaUserConfirm.searchById(userId);
            if (!objectUser) {
                throw new Error ('No hay un usuario según las credenciales previstas');
            }

            if (objectUser.estado === 1) {
                throw new Error ('El usuario no tiene un token pendiente');
            }

            if (!checkToken(token, objectUser.token)) {
                throw new Error ('El token no es válido');
            }
            const tiempo = await comparaFecha(objectUser.token_creado);
            //lógica de vencimiento
            
            if (tiempo > 600) { // 600 segundos son 10 minutos
                throw new Error ('El token está vencido, pide otro');
            }
            
            console.log(tiempo);
            const userBD = new User({
                id_usuario: userId,
                estado: 1,
                token: " ",
                token_creado: " "
            });
            await instanciaUserConfirm.updateToken(userBD);
            await instanciaUserConfirm.close();
            console.log('Confirmación de recuperación exitosa');

        } catch (error) {
            console.error("Error about confirmRecoverAccount:", error);
            throw new Error(error.message);
        }
    }

    static resetPassword = async (token, userId, newPassword) => {
        try {
            if (!token || !userId, !newPassword) {
                throw new Error ('Hay datos incongruentes, vuelva a la página');
            }
            
            const instanciaUserResetPass = new UserDAO();
            const objectUser = await instanciaUserResetPass.searchById(userId);
            if (!objectUser) {
                throw new Error ('No hay un usuario según las credenciales previstas');
            }

            if (objectUser.estado === 1) {
                throw new Error ('El usuario no tiene un token pendiente');
            }

            if (await checkPassword(newPassword, objectUser.password)) {
                throw new Error ('Las contraseñas son iguales');
            }

            if (!checkToken(token, objectUser.token)) {
                throw new Error ('El token no es válido');
            }
            const tiempo = await comparaFecha(objectUser.token_creado);
            //lógica de vencimiento
            
            if (tiempo > 600) { // 600 segundos son 10 minutos
                console.log(tiempo);
                throw new Error ('El token está vencido, pide otro');
            }
            
            const hashPass = await hashPassword(newPassword);

            const userBD = new User({
                id_usuario: userId,
                password: hashPass,
                estado: 1,
                token: " ",
                token_creado: " "
            });
            await instanciaUserResetPass.updatePassword(userBD);
            await instanciaUserResetPass.close();
            console.log('Actualización de contraseña exitosa');

        } catch (error) {
            console.error("Error about confirmRecoverAccount:", error);
            throw new Error(error.message);
        }
    }

    static verifyTokenAndUser = async(token, userId) => {
        try {
            const instanciaUserVerify = new UserDAO();
            const objectUser = await instanciaUserVerify.searchById(userId);
            if (!objectUser) {
                throw new Error ('No hay un usuario según las credenciales previstas');
            }

            if (objectUser.estado === 1) {
                throw new Error ('El usuario no tiene un token pendiente');
            }

            if (!checkToken(token, objectUser.token)) {
                throw new Error ('El token no es válido');
            }
            const tiempo = await comparaFecha(objectUser.token_creado);
            //lógica de vencimiento
            
            if (tiempo > 900) { // 900 segundos son 15 minutos
                throw new Error ('El token está vencido, pide otro');
            }
            
            await instanciaUserVerify.close();
            console.log('Confirmación de token y userID exitosa');
            return true;

        } catch (error) {
            console.error("Error about verifyTokenAndUser:", error);
            throw new Error(error.message);
        }
    }

}