import bcrypt from 'bcrypt';
import { saltRounds } from '../config/settings';

export const hashPassword = async (password: string) => {
	return await bcrypt.hash(password, saltRounds);
};

export const matchPasswords = async (stored: string, entered: string) => {
	return await bcrypt.compare(stored, entered);
};
