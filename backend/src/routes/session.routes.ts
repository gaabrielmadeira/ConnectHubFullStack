import { Router } from "express";
import { sessionController } from "../controllers";
import { validatedBody } from "../middlewares";
import { sessionSchema } from "../schemas";

const sessionRouter: Router = Router();

sessionRouter.post("", validatedBody(sessionSchema), sessionController.clientLogin);

export default sessionRouter;