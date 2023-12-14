import { Request, Response } from "express";
import { clientService } from "../services";
import { ClientContactsRetrieve, ClientReturn, ClientUpdate } from "../interfaces";

const clientCreate = async (req: Request, res: Response): Promise<Response> => {
  const client: ClientReturn = await clientService.clientCreate(req.body)

  return res.status(201).json(client);
};

const clientContactsRetrieve = async (req: Request, res: Response): Promise<Response> => {
  const clientId: string = req.params.clientId;

  const client: ClientContactsRetrieve = await clientService.clientContactsRetrieve(clientId);

  return res.status(200).json(client);
};

const clientUpdate = async (req: Request, res: Response): Promise<Response> => {
  const { foundClient } = res.locals;
  const { body } = req;

  const client: ClientUpdate = await clientService.clientUpdate(foundClient, body);

  return res.status(200).json(client)
};

const clientDestroy = async (req: Request, res: Response): Promise<Response> => {
  const { foundClient } = res.locals;

  await clientService.clientDestroy(foundClient);

  return res.status(204).json()
};


export default {
  clientCreate,
  clientContactsRetrieve,
  clientUpdate,
  clientDestroy
};