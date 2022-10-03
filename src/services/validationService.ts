import jwt from 'jsonwebtoken';
import { User } from '../interfaces/User.interface';
import { PostingModel, UserModel } from '../models/models';

const jwtSecret = process.env['NG_APP_SECRET'];
const blackList = new Set();

export const signToken = (payload: any) => {
	return jwt.sign(payload, jwtSecret as string, {
		expiresIn: '2d',
	});
};

export const validateToken = (token: string) => {
	if (blackList.has(token)) {
		throw new Error('Token is blacklisted');
	}
	return jwt.verify(token, jwtSecret!) as User;
};

export const validateUser = async (token: string) => {
	const user = validateToken(token);
	const userData = await UserModel.findByPk(user.id);
	if (user.email === userData?.email) {
		return true;
	}
	return false;
};

export const validatePostingOwner = async (id: number, token: string) => {
	const user = validateToken(token);
	const posting = await PostingModel.findByPk(id);
	if (user.email === posting?.userEmail) {
		return true;
	}
	return false;
};

export const blacklistToken = async (token: string) => {
	blackList.add(token);
};
