"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const express_validator_1 = require("express-validator");
exports.authValidation = [
    (0, express_validator_1.body)("userName")
        .trim()
        .notEmpty()
        .withMessage("You must provide a username"),
    (0, express_validator_1.body)("password")
        .trim()
        .notEmpty()
        .withMessage("You must provide a password"),
];
