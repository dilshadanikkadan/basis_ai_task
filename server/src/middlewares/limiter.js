"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const bad_request_error_1 = require("../exceptions/bad-request-error");
const limitHandler = (req, res, next, options) => {
    throw new bad_request_error_1.BadRequestError("Too many requests, please try again later.");
};
exports.rateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 3,
    handler: limitHandler,
    statusCode: 429,
});
