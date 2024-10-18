"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutController = exports.currentUserController = exports.authLoginController = exports.authCreateController = void 0;
const repository = __importStar(require("../../src/repository/auth.repository"));
const genrateToken_1 = require("../services/generateToken/genrateToken");
const bad_request_error_1 = require("../exceptions/bad-request-error");
const password_service_1 = require("../services/password/password.service");
const verifyToken_1 = require("../services/generateToken/verifyToken");
/*
   authCreateController
 */
const authCreateController = async (req, res, next) => {
    try {
        //after validating the req.body passing to repo layer
        const response = await repository.buildUser(req.body);
        const token = (0, genrateToken_1.generateToken)({
            _id: response._id,
            userName: response.userName,
        });
        res.cookie("token", token, {
            secure: true,
            sameSite: "none",
            httpOnly: true,
            path: "/",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.authCreateController = authCreateController;
// authLoginController
const authLoginController = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        const isUserExist = await repository.findUserName(userName);
        if (!isUserExist)
            throw new bad_request_error_1.BadRequestError("no user foudd");
        const isMatchPassword = await password_service_1.Password.compare(isUserExist.password, password);
        if (!isMatchPassword)
            throw new bad_request_error_1.BadRequestError("passoword is not matching");
        const token = (0, genrateToken_1.generateToken)({
            _id: isUserExist._id,
            userName: isUserExist.userName,
        });
        /*
        setting cookie options for temporaary need
        */
        res.cookie("token", token, {
            secure: true,
            sameSite: "none",
            httpOnly: true,
            path: "/",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json(isUserExist);
    }
    catch (error) {
        next(error);
    }
};
exports.authLoginController = authLoginController;
/*
   currentUserController
 */
const currentUserController = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        const user = (0, verifyToken_1.verifyToken)(token);
        if (!user)
            throw new bad_request_error_1.BadRequestError("user is not valid!!!");
        const isUser = await repository.findUser(user._id);
        if (!isUser)
            throw new bad_request_error_1.BadRequestError("user is not valid!!!");
        res.status(200).json(isUser);
    }
    catch (error) {
        next(error);
    }
};
exports.currentUserController = currentUserController;
/*
   logoutController
 */
const logoutController = async (req, res, next) => {
    try {
        res.clearCookie("token");
        res.status(200).json("sucessfullt logout");
    }
    catch (error) {
        next(error);
    }
};
exports.logoutController = logoutController;
