import { User } from '../interfaces/User.interface';
import { PostingModel, UserModel } from '../models/models';
import { hashPassword, matchPasswords } from './encryptionService';
import { blacklistToken, signToken, validateUser } from './validationService';

const createSession = (user: User) => {
	const payload = {
		id: user.id,
		email: user.email,
		password: user.password,
		firstName: user.firstName,
		lastName: user.lastName,
		phone: user.phone,
		address: user.address,
		city: user.city,
	};

	const token = signToken(payload);

	return {
		id: user.id,
		email: user.email,
		firstName: user.firstName,
		lastName: user.lastName,
		phone: user.phone,
		address: user.address,
		city: user.city,
		token,
	};
};

export const register = async (data: User) => {
	const exists = await UserModel.findOne({ where: { email: data.email } });

	if (exists) {
		throw new Error('Email is already taken');
	}

	const hashedPassword = await hashPassword(data.password)
	
	const user = await UserModel.create({
		email: data.email,
		password: hashedPassword,
		firstName: data.firstName,
		lastName: data.lastName,
		phone: data.phone,
		address: data.address,
		city: data.city,
	});

	return createSession(user);
};

export const login = async (data: { email: string; password: string }) => {
	const user = await UserModel.findOne({ where: { email: data.email } });

	if (!user) {
		throw new Error('Incorrect credentials');
	}
	const matchPassword = await matchPasswords(data.password, user.password)

	if (!matchPassword) {
		throw new Error('Incorrect credentials');
	}

	return createSession(user);
};

export const logout = (token: string) => {
	blacklistToken(token);
};

export const editUserDetails = async (
	id: number,
	data: User,
	token: string
) => {
	try {
		let check = await validateUser(token);
		if (!check) {
			throw new Error('User not authorized');
		}
		let firstName = data.firstName;
		let lastName = data.lastName;
		let email = data.email;
		let phone = data.phone;
		let address = data.address;
		let city = data.city;
		const userData = await UserModel.findByPk(id);
		await PostingModel.update(
			{ userEmail: email },
			{ where: { id: userData?.id } }
		);
		return await UserModel.update(
			{ firstName, lastName, email, phone, address, city },
			{ where: { id } }
		);
	} catch (err: any) {
		throw new Error(err.message);
	}
};

export const editUserPassword = async (
	id: number,
	password: string,
	token: string
) => {
	try {
		let check = await validateUser(token);
		if (!check) {
			throw new Error('User not authorized');
		}
		const hashedPassword = await hashPassword(password)
		return await UserModel.update(
			{ password: hashedPassword },
			{ where: { id } }
		);
	} catch (err: any) {
		throw new Error(err.message);
	}
};

export const deleteUser = async (id: number, token: string) => {
	try {
		let check = await validateUser(token);
		if (!check) {
			throw new Error('User not authorized');
		}
		return await UserModel.destroy({ where: { id } });
	} catch (err: any) {
		throw new Error(err.message);
	}
};
