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
        const confirmationUrl = `http://localhost:5173/api/confirm?token=${encodeURIComponent(token.token)}&userId=${encodeURIComponent(user.id_usuario)}`;
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
        const recoverUrl = `http://localhost:5173/recoverPass?token=${encodeURIComponent(token.token)}&userId=${encodeURIComponent(user.id_usuario)}`;
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

    static sendWelcomeEmail = async (user, paciente) => {
        const info = await transporter.sendMail({
            from: 'EPS Membership <epsm@eps.com>',
            to: user.correo_usuario,
            subject: 'EPS - Te damos la bienvenida',
            text: `Hola ${paciente.nombres}, te damos la bienvenida a EPS. ¡Explora todos los beneficios que tenemos para ti!`,
            html: `
                    <p>Hola <strong>${paciente.nombres}</strong>, te damos la bienvenida a EPS.</p>
                    <p>Ahora como miembro, tienes acceso a todos nuestros servicios exclusivos. Estamos aquí para ayudarte en lo que necesites.</p>
                    <p>Para empezar, puedes visitar <a href="https://www.colsubsidio.com/">nuestra página de bienvenida</a>.</p>
                    <p>Si tienes alguna pregunta, no dudes en contactarnos a través de nuestro soporte: <a href="#">support@eps.com</a>.</p>
                    <p>¡Gracias por unirte a nosotros!</p>
                    <p>Saludos,</p>
                    <p>El Equipo de EPS</p>
            `
        });
    
        console.log('Mensaje enviado', info.messageId);
    }
    
}