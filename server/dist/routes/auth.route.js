"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const login_validation_1 = require("../utils/validation/login.validation");
const validate_request_1 = require("../middlewares/validate-request");
const router = express_1.default.Router();
/*
   this router for auth managing the login system
   sanitizing the inputs with express-validator
   and managing with middlewares
 */
router.post("/register", login_validation_1.authValidation, validate_request_1.validateRequest, auth_controller_1.authCreateController);
router.post("/login", auth_controller_1.authLoginController);
router.get("/currentUser", auth_controller_1.currentUserController);
router.post("/logout", auth_controller_1.logoutController);
exports.default = router;
