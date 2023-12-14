import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";


const handleErrors = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof JsonWebTokenError) {
    return res.status(401).json({ message: error.message })
  }

  if (error instanceof ZodError) {
    return res.status(400).json({ message: error.flatten().fieldErrors });
  }

  console.error(error);
  return res.status(500).json({ error: "Internal server error" });
};

export default handleErrors;
