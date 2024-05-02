import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

const config = () => {
    return {
        host: process.env.MTP_HOST,
        port: +process.env.MTP_PORT,
        auth: {
          user: process.env.MTP_USER,
          pass: process.env.MTP_PASS
        },
        tls: {
          ciphers:'SSLv3'
        }
    }
}

export const transporter = nodemailer.createTransport(config());