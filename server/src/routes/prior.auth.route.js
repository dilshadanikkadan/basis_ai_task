"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prior_auth_controller_1 = require("../controllers/prior.auth.controller");
const router = express_1.default.Router();
/*
   this router for auth managing the authPriorReq system
 */
router.post("/", prior_auth_controller_1.createAuthPriorController);
exports.default = router;
