"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(process.env['NG_APP_DB'], process.env['NG_APP_USERNAME'], process.env['NG_APP_PASSWORD'], {
    host: process.env['NG_APP_HOST'],
    port: Number(process.env['NG_APP_PORT']),
    dialect: 'postgres',
    logging: false,
});
exports.default = sequelize;
