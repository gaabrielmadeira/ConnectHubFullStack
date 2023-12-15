import { Request, Response, NextFunction } from "express";
import { Contact } from "../entities";
import { contactRepo } from "../repositories";
import { AppError } from "../errors";

const contactExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const paramsId: string = req.params.contactId;
  console.log("entre aqui")

  const foundContact: Contact | null = await contactRepo.findOneBy({ id: paramsId })

  if (!foundContact) throw new AppError("Contact not found.", 404);

  res.locals = { ...res.locals, foundContact };

  return next();
};

export default contactExist;