import {transporter} from "../config/nodemailer.js";

/**
 * @typedef {Object} User
 * @property {string} email - El correo electrónico del usuario.
 * @property {string} name - El nombre del usuario.
 * @property {Integer} token - El token de confirmación del usuario
 */
export class SendEmail {
    /**
    * Envía un correo electrónico de confirmación.
    * @param {User} user - El usuario a quien enviar el correo.
    */
    static sendConfirmationEmail = async ( user, token ) => {
        const confirmationUrl = `http://localhost:3000/confirm?token=${encodeURIComponent(token.token)}&userId=${encodeURIComponent(user.id_usuario)}`;
        const info = await transporter.sendMail({
            from: 'EPS Account Logistics <epsal@eps.com>',
            to: user.correo_usuario,
            subject: 'EPS - Confirma tu cuenta',
            text: 'EPS - Confirma tu cuenta',
            html: `
            <p>Hola, has creado tu cuenta, solo falta que verifiques tu cuenta</p>
                <p>Visita el siguiente enlace:</p>
                <a href="${confirmationUrl}">Confirmar cuenta</a>
                <p>Ten en cuenta que el enlace vence en 10 minutos</p>
            `
        });

        console.log('Mensaje enviado', info.messageId);
    }

    /**
    * Envía un correo electrónico de recuperación de contraseña.
    * @param {User} user - El usuario a quien enviar el correo.
    */
    static sendPasswordResetEmail = async ( user, token ) => {
        const recoverUrl = `http://localhost:3000/recoverPass?token=${encodeURIComponent(token.token)}&userId=${encodeURIComponent(user.id_usuario)}`;
        const info = await transporter.sendMail({
            from: 'EPS Account Logistics <epsal@eps.com>',
            to: user.correo_usuario,
            subject: 'EPS - Recupera tu contraseña',
            text: 'EPS - Recupera tu contraseña',
            html: `
            <p>Hola, has olvidado tu contraseña</p>
                <p>Visita el siguiente enlace:</p>
                <a href="${recoverUrl}">Confirmar cuenta</a>
                <p>Ten en cuenta que el enlace vence en 10 minutos</p>
            `
        });

        console.log('Mensaje enviado', info.messageId);
    }
}