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
exports.cleanData = exports.getBrands = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const models_1 = require("../models/models");
const functions_1 = require("./functions");
const getBrands = () => __awaiter(void 0, void 0, void 0, function* () {
    const aggregatedBrands = [];
    let raw = [];
    fs_1.default.readFile(path_1.default.resolve(__dirname, './rawData/device_list.json'), (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            throw new Error('failed to read data');
        }
        raw = JSON.parse(data.toString()).data;
        raw.forEach((item) => {
            aggregatedBrands.push({
                brandId: item.brand_id,
                brandName: item.brand_name,
                brandKey: item.key,
            });
        });
        try {
            yield models_1.BrandModel.bulkCreate(aggregatedBrands);
        }
        catch (err) {
            console.log(err.message);
        }
    }));
});
exports.getBrands = getBrands;
const cleanData = () => __awaiter(void 0, void 0, void 0, function* () {
    const devices = [];
    let raw = [];
    fs_1.default.readFile(path_1.default.resolve(__dirname, './rawData/device_data.json'), (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            throw new Error('failed to read data');
        }
        raw = JSON.parse(data.toString());
        raw.forEach((item) => {
            if (item.status == 200) {
                devices.push((0, functions_1.normalize)(item));
            }
        });
        try {
            yield models_1.DeviceModel.bulkCreate(devices);
        }
        catch (err) {
            console.log(err.message);
        }
    }));
});
exports.cleanData = cleanData;
