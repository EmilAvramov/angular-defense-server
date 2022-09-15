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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevices = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models/models");
const getDevices = (query = '', limit = 100, offset = 0) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (query) {
            return yield models_1.DeviceModel.findAll({
                where: { deviceName: { [sequelize_1.Op.iLike]: `%${query}%` } },
                limit,
                offset,
                include: {
                    all: true,
                },
            });
        }
        return yield models_1.DeviceModel.findAll({
            limit,
            offset,
            include: {
                all: true,
            },
        });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.getDevices = getDevices;
