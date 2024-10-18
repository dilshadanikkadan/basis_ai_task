"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../_boot/config");
const generateToken = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, config_1.config.secrets.access_token, { expiresIn: "7d" });
};
exports.generateToken = generateToken;
