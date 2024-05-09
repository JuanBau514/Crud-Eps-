import dotenv from 'dotenv';
dotenv.config();
console.log('nodemailer config');
console.log(process.env.MTP_HOST, process.env.MTP_PORT, process.env.MTP_USER, process.env.MTP_PASS);
import nodemailer from 'nodemailer';

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