import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const duplicatePhones = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { telephone } = req.body;

  const hasDuplicates = (array: string[]): boolean => {
    const uniqueSet = new Set(array);
    return array.length !== uniqueSet.size;
  };

  if(req.method == "PATCH"){
    if(telephone){
      if (hasDuplicates(telephone)) {
        throw new AppError("Duplicate phone numbers are not allowed.", 400);
      };
    }
    return next();
  };
  
  if (hasDuplicates(telephone)) {
    throw new AppError("Duplicate phone numbers are not allowed.", 400);
  };


  return next()
};

export default duplicatePhones;