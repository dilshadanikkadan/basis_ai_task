import express from "express";

import { patientValidtion } from "../utils/validation/patient.validation";
import { validateRequest } from "../middlewares/validate-request";
import { createAuthPriorController } from "../controllers/prior.auth.controller";

const router = express.Router();

 /*
    this router for auth managing the authPriorReq system
  */


router.post("/" ,createAuthPriorController);

export default router;
