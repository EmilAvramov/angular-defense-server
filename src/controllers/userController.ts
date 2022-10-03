import { Router } from 'express';
import {
	register,
	login,
	logout,
	editUserDetails,
	editUserPassword,
	deleteUser,
} from '../services/userService';
import { validateToken } from '../services/validationService';

const router = Router();

router.post('/register', async (req, res) => {
	try {
		const response = await register(req.body);
		res.status(201).json(response);
	} catch (err: any) {
		res.status(400).json({ message: err.message });
	}
});

router.post('/login', async (req, res) => {
	try {
		const response = await login(req.body);
		res.status(200).json(response);
	} catch (err: any) {
		res.status(400).json({ message: err.message });
	}
});

router.post('/logout', (req, res) => {
	try {
		logout(req.body.accessToken);
		res.status(200).json({ message: 'Successfully logged out' });
	} catch (err: any) {
		res.status(400).json({ message: err.message });
	}
});

router.post('/validate', (req, res) => {
	try {
		res.status(200).json(validateToken(req.body.token));
	} catch (err: any) {
		res.status(400).json({ message: err.message });
	}
});

router.patch('/edit/details/:id', (req, res) => {
	try {
		let id = Number(req.params.id);
		let data = req.body;
		let token = req.rawHeaders[13];
		res.status(200).json(editUserDetails(id, data, token));
	} catch (err: any) {
		res.status(400).json({ message: err.message });
	}
});

router.patch('/edit/password/:id', (req, res) => {
	try {
		let id = Number(req.params.id);
		let password = req.body.password;
		let token = req.rawHeaders[13];
		res.status(200).json(editUserPassword(id, password, token));
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}
});

router.delete('/delete/:id', (req, res) => {
	try {
		let token = req.rawHeaders[13];
		res.status(200).json(deleteUser(Number(req.params.id), token));
	} catch (err: any) {
		res.status(400).json({ message: err.message });
	}
});

export default router;
