"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../_boot/config");
const verifyToken = (token) => {
    return (0, jsonwebtoken_1.verify)(token, config_1.config.secrets.access_token);
};
exports.verifyToken = verifyToken;
