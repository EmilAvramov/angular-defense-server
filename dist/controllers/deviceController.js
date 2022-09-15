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
const express_1 = require("express");
const deviceService_1 = require("../services/deviceService");
const router = (0, express_1.Router)();
router.post('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, deviceService_1.getDevices)('', req.body.limit, req.body.offset);
        res.status(200).json(response);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.post('/list/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = req.query.query;
        let limit = req.body.limit;
        const response = yield (0, deviceService_1.getDevices)(query, limit);
        res.status(200).json(response);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
exports.default = router;
