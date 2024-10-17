import { body, validationResult } from "express-validator";

export const authValidation = [
  body("userName")
    .trim()
    .notEmpty()
    .withMessage("You must provide a username"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("You must provide a password"),
];