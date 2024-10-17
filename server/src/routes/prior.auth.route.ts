import express from "express";

import { patientValidtion } from "../utils/validation/patient.validation";
import { validateRequest } from "../middlewares/validate-request";
import { createAuthPriorController } from "../controllers/prior.auth.controller";
const router = express.Router();

// =================================
//get all patients

router.post("/" ,createAuthPriorController);

export default router;
