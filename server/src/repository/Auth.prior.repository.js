"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAuthReq = void 0;
const auth_prior_model_1 = require("../models/auth.prior.model");
const buildAuthReq = async (payload) => {
    const newAuthReq = new auth_prior_model_1.AuthorizationModel({
        ...payload,
    });
    const result = await newAuthReq.save();
    return result;
};
exports.buildAuthReq = buildAuthReq;
