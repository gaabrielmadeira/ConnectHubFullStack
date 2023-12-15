import { Request, Response } from "express";
import { contactsService } from "../services";
import { ClientReturn, ContactRead } from "../interfaces";
import { ContactUpdate } from "../interfaces/contact.interface";

const contactCreate = async (req: Request, res: Response): Promise<Response> => {
  const clientId: string = res.locals.decoded.sub;

  const contact: ClientReturn = await contactsService.contactCreate(req.body, clientId);

  return res.status(201).json(contact)
};

const contactRead = async (req: Request, res: Response): Promise<Response> => {
  const contacts: ContactRead = await contactsService.contactRead();

  return res.status(200).json(contacts);
};

const contactUpdate = async (req: Request, res: Response): Promise<Response> => {
  const { foundContact } = res.locals;
  const { body } = req;

  const contact: ContactUpdate = await contactsService.contactUpdate(foundContact, body)

  return res.status(200).json(contact)
};

const contactDestroy = async (req: Request, res: Response): Promise<Response> => {
  const { foundContact } = res.locals;

  await contactsService.contactDestroy(foundContact);

  return res.status(204).json()
};


export default {
  contactCreate,
  contactRead,
  contactUpdate,
  contactDestroy
};