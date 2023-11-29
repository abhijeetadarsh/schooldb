import express from "express";
import { __api } from "../constants.js";
import { router } from "./routes/routeHandler.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(`${__api}`, router);

export default app;
