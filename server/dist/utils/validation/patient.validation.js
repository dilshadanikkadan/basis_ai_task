"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientValidtion = void 0;
const express_validator_1 = require("express-validator");
exports.patientValidtion = [
    (0, express_validator_1.body)("name").trim().notEmpty().withMessage("You must provide a name"),
    (0, express_validator_1.body)("age").trim().notEmpty().withMessage("You must provide a name"),
    (0, express_validator_1.body)("gender").trim().notEmpty().withMessage("You must provide a name"),
];
