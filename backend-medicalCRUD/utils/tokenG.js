import crypto from 'crypto';
import bcrypt from 'bcrypt';

export const generarToken = () => {
    return crypto.randomBytes(32).toString('hex');  // Genera un token seguro de 64 caracteres hexadecimales
}

export const hashToken = async (token) => {
    const saltRounds = 10;  // Ajusta esto según la seguridad deseada y la carga de trabajo permitida
    return await bcrypt.hash(token, saltRounds);
}

export const checkToken = async (enteredToken, storedHash) => {
    return await bcrypt.compare(enteredToken, storedHash);
}