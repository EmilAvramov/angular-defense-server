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
exports.getNews = exports.getRecommended = void 0;
const axios_1 = __importDefault(require("axios"));
const settings_1 = require("../config/settings");
const getRecommended = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${settings_1.apiHost}?route=recommended`);
        const latest = response.data.data.recommended_1.data.map((item) => {
            return {
                deviceName: item.device_name,
                deviceImage: item.device_image,
                deviceKey: item.key,
            };
        });
        const popular = response.data.data.recommended_3.data.map((item) => {
            return {
                rank: item.no,
                deviceName: item.device_name,
                dailyHits: item.daily_hits,
                deviceKey: item.key,
            };
        });
        return {
            latest,
            popular,
        };
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.getRecommended = getRecommended;
const getNews = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(settings_1.apiHost, {
            route: 'search',
            query,
        }, { headers: settings_1.headers });
        const news = response.data.data.news_list;
        const reviews = response.data.data.review_list;
        const status = response.data.status;
        return { news, reviews, status };
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.getNews = getNews;
