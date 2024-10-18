"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = exports.findUserName = exports.buildUser = void 0;
const auth_model_1 = require("../models/auth.model");
const buildUser = async (payload) => {
    const newPatients = new auth_model_1.UserModel({
        ...payload,
    });
    const result = await newPatients.save();
    return result;
};
exports.buildUser = buildUser;
const findUserName = async (payload) => {
    const result = await auth_model_1.UserModel.findOne({ userName: payload });
    if (!result)
        return null;
    return result;
};
exports.findUserName = findUserName;
const findUser = async (payload) => {
    const result = await auth_model_1.UserModel.findOne({ _id: payload });
    if (!result)
        return null;
    return result;
};
exports.findUser = findUser;
