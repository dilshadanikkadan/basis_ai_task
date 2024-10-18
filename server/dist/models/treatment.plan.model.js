"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treatmentsShema = void 0;
const mongoose_1 = require("mongoose");
const TreatmentPlanSchema = new mongoose_1.Schema({
    planName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    },
    treatments: {
        treatmentType: {
            type: String,
        },
        medication: {
            type: String,
        },
        dosage: {
            type: String,
        },
        frequency: {
            type: String,
        },
        notes: {
            type: String,
        },
    },
}, { timestamps: true });
exports.treatmentsShema = (0, mongoose_1.model)("treatments", TreatmentPlanSchema);
