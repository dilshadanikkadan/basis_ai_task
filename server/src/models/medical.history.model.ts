import { model, Schema } from "mongoose";

interface MedicalHistoryEntity {
    condition: string;
    diagnosisDate: string;
    medications: {
      name: string;
      dosage?: string;
      frequency?: string;
    }[];
    treatments: {
      type?: string;
      date?: Date;
      outcome?: string;
    }[];
    labResults: {
      testType?: string;
      result?: string;
      date?: Date;
    }[];
  }
const MedicalHistorySchema = new Schema<MedicalHistoryEntity>(
  {
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
  },
  { _id:false }
);

export const medicalHistorySchema = MedicalHistorySchema