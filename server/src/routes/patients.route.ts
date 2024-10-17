import express from "express";
import {
  createPatientsController,
  getAllPatientsController,
  getSinglePatientsController,
} from "../controllers/patients.controller";
import { patientValidtion } from "../utils/validation/patient.validation";
import { validateRequest } from "../middlewares/validate-request";
const router = express.Router();

// =================================
//get all patients
router.get("/", getAllPatientsController);
router.get("/:id", getSinglePatientsController);
router.post("/", patientValidtion, validateRequest, createPatientsController);

export default router;
