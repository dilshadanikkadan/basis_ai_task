import express from "express";
import { authCreateController, authLoginController, currentUserController, logoutController } from "../controllers/auth.controller";
import { authValidation } from "../utils/validation/login.validation";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();


router.post("/register", authValidation, validateRequest, authCreateController);
router.post("/login", authLoginController);
router.get("/currentUser", currentUserController);
router.post("/logout", logoutController);





export default router;
