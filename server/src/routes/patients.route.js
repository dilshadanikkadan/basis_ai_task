"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patients_controller_1 = require("../controllers/patients.controller");
const patient_validation_1 = require("../utils/validation/patient.validation");
const validate_request_1 = require("../middlewares/validate-request");
const router = express_1.default.Router();
/*
   this router for auth managing the patient system
   sanitizing the inputs with express-validator
   and managing with middlewares
 */
router.get("/", patients_controller_1.getAllPatientsController);
router.get("/:id", patients_controller_1.getSinglePatientsController);
router.post("/", patient_validation_1.patientValidtion, validate_request_1.validateRequest, patients_controller_1.createPatientsController);
exports.default = router;
