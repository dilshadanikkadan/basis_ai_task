import { body, validationResult } from "express-validator";

export const patientValidtion = [
  body("name").trim().notEmpty().withMessage("You must provide a name"),
  body("age").trim().notEmpty().withMessage("You must provide a name"),
  body("gender").trim().notEmpty().withMessage("You must provide a name"),
];
