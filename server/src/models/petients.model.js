"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModel = void 0;
const mongoose_1 = require("mongoose");
const medical_history_model_1 = require("./medical.history.model");
const patientSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    medicalHistory: [medical_history_model_1.medicalHistorySchema],
}, {
    timestamps: true,
});
exports.PatientModel = (0, mongoose_1.model)("patients", patientSchema);
