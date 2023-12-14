import { NextFunction, Request, Response } from "express";
import { Client } from "../entities";
import { clientRepo } from "../repositories";
import { AppError } from "../errors";

const uniqueEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email } = req.body;

  const foundEmail: Client | null = await clientRepo.findOneBy({ email: email });

  if(foundEmail) throw new AppError ("Email already exists.", 409);

  return next()
};

export default uniqueEmail;