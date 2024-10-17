import { Schema, model } from "mongoose";
import { medicalHistorySchema } from "./medical.history.model";

interface PatientEntity {
  name: string;
  age: number;
  gender: string;

}

const patientSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    medicalHistory: [medicalHistorySchema],
  },
  {
    timestamps: true,
  }
);

export const PatientModel = model<PatientEntity>("patients", patientSchema);
