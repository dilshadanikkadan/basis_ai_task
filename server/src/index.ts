import express, { Application } from "express";
import cors from "cors";
import patientsRoute from "../src/routes/patients.route";
import priorRoute from "../src/routes/prior.auth.route";
import authRoute from "../src/routes/auth.route";
import { errorHandler } from "./exceptions/global-error";
import cookie  from 'cookie-parser'

const app: Application = express();

const corsOptions = {
  origin: ["http://localhost:5173","https://basis-ai-task.vercel.app"],

  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookie())
app.use("/patients", patientsRoute);
app.use("/priorRequest", priorRoute);
app.use("/auth", authRoute);
app.use(errorHandler);

export default app;
