"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUserPassword = exports.editUserDetails = exports.logout = exports.validateToken = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const settings_1 = require("../config/settings");
const models_1 = require("../models/models");
const jwtSecret = process.env['NG_APP_SECRET'];
const blackList = new Set();
const createSession = (user) => {
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
    const token = jsonwebtoken_1.default.sign(payload, jwtSecret, {
        expiresIn: '2d',
    });
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
const register = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield models_1.UserModel.findOne({ where: { email: data.email } });
    if (exists) {
        throw new Error('Email is already taken');
    }
    const hashedPassword = yield bcrypt_1.default.hash(data.password, settings_1.saltRounds);
    const user = yield models_1.UserModel.create({
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
        city: data.city,
    });
    return createSession(user);
});
exports.register = register;
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.UserModel.findOne({ where: { email: data.email } });
    if (!user) {
        throw new Error('Incorrect credentials');
    }
    const matchPassword = yield bcrypt_1.default.compare(data.password, user.password);
    if (!matchPassword) {
        throw new Error('Incorrect credentials');
    }
    return createSession(user);
});
exports.login = login;
const validateToken = (token) => {
    if (blackList.has(token)) {
        throw new Error('Token is blacklisted');
    }
    return jsonwebtoken_1.default.verify(token, jwtSecret);
};
exports.validateToken = validateToken;
const logout = (token) => {
    blackList.add(token);
};
exports.logout = logout;
const editUserDetails = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let firstName = data.firstName;
        let lastName = data.lastName;
        let email = data.email;
        let phone = data.phone;
        let address = data.address;
        let city = data.city;
        return yield models_1.UserModel.update({ firstName, lastName, email, phone, address, city }, { where: { id } });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.editUserDetails = editUserDetails;
const editUserPassword = (id, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(id, password);
        const hashedPassword = yield bcrypt_1.default.hash(password, settings_1.saltRounds);
        return yield models_1.UserModel.update({ password: hashedPassword }, { where: { id } });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.editUserPassword = editUserPassword;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.UserModel.destroy({ where: { id } });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.deleteUser = deleteUser;
