import { Request, Response, NextFunction } from "express";
import { clientRepo } from "../repositories";
import { Client } from "../entities";
import { AppError } from "../errors";

const duplicateContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const sub: string = res.locals.decoded.sub;
  const { name, email, telephone } = req.body;

  const foundClient: Client = (await clientRepo.findOne({
    where: {
      id: sub
    },
    relations: {
      contacts: true
    }
  }))!

  const existingContact = foundClient.contacts.find((contact) => {
    return (
      contact.name === name &&
      contact.email === email &&
      (contact.telephone && contact.telephone.some(phone => telephone.includes(phone)))
    );
  });

  if(existingContact) throw new AppError ("Contact already exists.", 409);

  return next();
};

export default duplicateContact;