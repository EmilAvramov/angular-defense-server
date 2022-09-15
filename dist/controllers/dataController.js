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
const dataService_1 = require("../services/dataService");
const router = (0, express_1.Router)();
router.get('/recommended', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { latest, popular } = yield (0, dataService_1.getRecommended)();
        res.status(200).json({ latest, popular });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.post('/news', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = req.query.query;
        if (!query) {
            query = '';
        }
        const { news, reviews, status } = yield (0, dataService_1.getNews)(query);
        if (status !== 200) {
            res.status(404).json({ message: 'not found' });
        }
        else {
            res.status(200).json({ news, reviews });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
exports.default = router;
