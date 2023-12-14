import { NextFunction, Request, Response } from "express";
import { clientRepo } from "../repositories";
import { AppError } from "../errors";
import { Client } from "../entities";

const clientExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const paramsId: string = req.params.clientId;
  const sub: string = res.locals.decoded.sub;

  const foundClient: Client | null = await clientRepo.findOneBy({ id: paramsId })

  if (!foundClient) throw new AppError("Client not found.", 404);

  res.locals = { ...res.locals, foundClient };

  if (sub !== paramsId) throw new AppError("Unauthorized access.", 401);

  return next();
};

export default clientExist;