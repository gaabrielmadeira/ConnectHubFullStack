import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const validatePhones = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { telephone } = req.body;

  if (req.method === "PATCH"){
    if (telephone && telephone.length == 0){
      throw new AppError("At least one phone number must be provided.", 400)
    }
    return next()
  }

  if (!telephone || telephone.length == 0) {
    throw new AppError("At least one phone number must be provided.", 400)
  }

  return next()
};

export default validatePhones;