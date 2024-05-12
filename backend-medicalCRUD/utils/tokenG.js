import crypto from 'crypto';
import bcrypt from 'bcrypt';

export const generarToken = () => {
    return crypto.randomBytes(32).toString('hex'); 
}

export const hashToken = async (token) => {
    const saltRounds = 10; 
    return await bcrypt.hash(token, saltRounds);
}

export const checkToken = async (enteredToken, storedHash) => {
    return await bcrypt.compare(enteredToken, storedHash);
}