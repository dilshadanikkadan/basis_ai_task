"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationModel = void 0;
const mongoose_1 = require("mongoose");
const AuthorizationRequestSchema = new mongoose_1.Schema({
    patientId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "patients",
        required: true,
    },
    providerId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
    },
    treatmentType: {
        type: String,
        required: true,
    },
    diagnosisCode: {
        type: String,
        required: true,
    },
    insurancePlan: {
        type: String,
        required: true,
    },
    dateOfService: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Denied"],
        default: "Pending",
    },
    requestDate: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
exports.AuthorizationModel = (0, mongoose_1.model)("AuthorizationRequest", AuthorizationRequestSchema);
