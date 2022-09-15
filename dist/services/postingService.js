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
exports.deletePosting = exports.editPosting = exports.createPosting = exports.getUserPostings = exports.getPostings = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models/models");
const getPostings = (query = '', limit = 100, offset = 0) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (query) {
            return yield models_1.PostingModel.findAll({
                include: [
                    {
                        model: models_1.DeviceModel,
                        where: { deviceName: { [sequelize_1.Op.iLike]: `%${query}%` } },
                        required: true,
                    },
                    {
                        model: models_1.UserModel,
                        required: true,
                    },
                ],
                limit,
                offset,
            });
        }
        return yield models_1.PostingModel.findAll({
            include: [
                {
                    model: models_1.UserModel,
                    required: true,
                },
                {
                    model: models_1.DeviceModel,
                    required: true,
                },
            ],
            limit,
            offset,
        });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.getPostings = getPostings;
const getUserPostings = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.PostingModel.findAll({
            include: [
                {
                    model: models_1.UserModel,
                    required: true,
                    where: { id },
                },
                {
                    model: models_1.DeviceModel,
                    required: true,
                },
            ],
        });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.getUserPostings = getUserPostings;
const createPosting = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.PostingModel.create(payload);
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.createPosting = createPosting;
const editPosting = (id, comments, price) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield models_1.PostingModel.update({ comments, price }, { where: { id } });
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.editPosting = editPosting;
const deletePosting = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posting = yield models_1.PostingModel.findByPk(id);
        yield models_1.PostingModel.destroy({ where: { id } });
        return posting;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.deletePosting = deletePosting;
