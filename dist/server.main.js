"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database"));
const express_1 = __importDefault(require("./config/express"));
const settings_1 = require("./config/settings");
try {
    database_1.default
        .authenticate()
        .then(() => console.log('Database connected...'))
        .then(() => {
        express_1.default.listen(settings_1.port, () => console.log(`Server is listening to port ${settings_1.port}...`));
    });
}
catch (err) {
    console.log(err);
}
