import mongoose, { model, Schema } from "mongoose";

interface AuthorizationRequestEntity {}

const AuthorizationRequestSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "patients",
      required: true,
    },  
    providerId: {
      type: Schema.Types.ObjectId,
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
  },
  { timestamps: true }
);

export const AuthorizationModel = model<AuthorizationRequestEntity>(
  "AuthorizationRequest",
  AuthorizationRequestSchema
);
