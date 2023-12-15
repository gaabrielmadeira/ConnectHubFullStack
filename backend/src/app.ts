import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { clientRouter, contactRouter, sessionRouter } from "./routes";
import { handleErrors } from "./middlewares";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/clients", clientRouter);
app.use("/contacts", contactRouter);
app.use("/login", sessionRouter);

app.use(handleErrors);

export default app;