"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSinglePatient = exports.getPatients = exports.buildPatients = void 0;
const petients_model_1 = require("../models/petients.model");
const buildPatients = async (payload) => {
    const newPatients = new petients_model_1.PatientModel({
        ...payload,
    });
    const result = await newPatients.save();
    return result;
};
exports.buildPatients = buildPatients;
const getPatients = async (pageNo, limit, name) => {
    const result = await petients_model_1.PatientModel.find();
    const _pageNo = Number(pageNo);
    const _limit = Number(limit);
    const totalCount = await petients_model_1.PatientModel.countDocuments();
    if (name) {
        return await petients_model_1.PatientModel.find({ name: { $regex: name, $options: "i" } })
            .skip((_pageNo - 1) * limit)
            .limit(_limit);
    }
    if (_pageNo > Math.ceil(totalCount / 2)) {
        return result;
    }
    if (pageNo == "undefined" || limit == "undefined") {
        return result;
    }
    return await petients_model_1.PatientModel.find()
        .skip((_pageNo - 1) * limit)
        .limit(_limit);
};
exports.getPatients = getPatients;
const getSinglePatient = async (id) => {
    const result = await petients_model_1.PatientModel.findOne({ _id: id });
    return result;
};
exports.getSinglePatient = getSinglePatient;
