import { model, Schema } from "mongoose";

interface TreatmentsShemaEntity{

}
const TreatmentPlanSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

export const treatmentsShema = model<TreatmentsShemaEntity>("treatments",TreatmentPlanSchema)