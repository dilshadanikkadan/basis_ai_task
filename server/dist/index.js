"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const patients_route_1 = __importDefault(require("../src/routes/patients.route"));
const prior_auth_route_1 = __importDefault(require("../src/routes/prior.auth.route"));
const auth_route_1 = __importDefault(require("../src/routes/auth.route"));
const global_error_1 = require("./exceptions/global-error");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: ["http://localhost:5173", "https://basis-ai-task.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
app.use("/patients", patients_route_1.default);
app.use("/priorRequest", prior_auth_route_1.default);
app.use("/auth", auth_route_1.default);
app.use(global_error_1.errorHandler);
exports.default = app;
