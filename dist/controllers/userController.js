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
const userService_1 = require("../services/userService");
const router = (0, express_1.Router)();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, userService_1.register)(req.body);
        res.status(201).json(response);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, userService_1.login)(req.body);
        res.status(200).json(response);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.post('/logout', (req, res) => {
    try {
        (0, userService_1.logout)(req.body.accessToken);
        res.status(200).json({ message: 'Successfully logged out' });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.post('/validate', (req, res) => {
    try {
        res.status(200).json((0, userService_1.validateToken)(req.body.token));
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.patch('/edit/details/:id', (req, res) => {
    try {
        let id = Number(req.params.id);
        let data = req.body;
        res.status(200).json((0, userService_1.editUserDetails)(id, data));
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.patch('/edit/password/:id', (req, res) => {
    try {
        let id = Number(req.params.id);
        let password = req.body.password;
        res.status(200).json((0, userService_1.editUserPassword)(id, password));
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.delete('/delete/:id', (req, res) => {
    try {
        res.status(200).json((0, userService_1.deleteUser)(Number(req.params.id)));
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.default = router;
