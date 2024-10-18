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
exports.getSinglePatientsController = exports.createPatientsController = exports.getAllPatientsController = void 0;
const repository = __importStar(require("../../src/repository/petients.repository"));
const getRandomMedicalList_1 = require("../utils/getRandomMedicalList");
const medification_data_1 = require("../utils/medification.data");
const getAllPatientsController = async (req, res, next) => {
    try {
        //after validating the req.body passing to repo layer
        const { pageNo, limit, name } = req.query;
        const response = await repository.getPatients(pageNo, limit, name);
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllPatientsController = getAllPatientsController;
const createPatientsController = async (req, res, next) => {
    try {
        //after validating the req.body passing to repo layer
        const response = await repository.buildPatients({
            ...req.body,
            // mocking a random medical history from list
            medicalHistory: [(0, getRandomMedicalList_1.getRandomMedicalList)(medification_data_1.medicalHistoryData)],
        });
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.createPatientsController = createPatientsController;
const getSinglePatientsController = async (req, res, next) => {
    try {
        //after validating the req.body passing to repo layer
        const response = await repository.getSinglePatient(req.params.id);
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.getSinglePatientsController = getSinglePatientsController;
