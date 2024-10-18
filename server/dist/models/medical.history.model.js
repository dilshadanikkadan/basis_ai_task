"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicalHistorySchema = void 0;
const mongoose_1 = require("mongoose");
const MedicalHistorySchema = new mongoose_1.Schema({
    condition: {
        type: String,
        required: true,
    },
    diagnosisDate: {
        type: String,
        required: true,
    },
    medications: [
        {
            name: { type: String, required: true },
            dosage: { type: String },
            frequency: { type: String },
        },
    ],
    treatments: [
        {
            type: { type: String },
            date: { type: Date },
            outcome: { type: String },
        },
    ],
    labResults: [
        {
            testType: { type: String },
            result: { type: String },
            date: { type: Date },
        },
    ],
}, { _id: false });
exports.medicalHistorySchema = MedicalHistorySchema;
