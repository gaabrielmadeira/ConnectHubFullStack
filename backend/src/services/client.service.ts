import { Client } from "../entities";
import { ClientCreate, ClientContactsRetrieve, ClientReturn, ClientUpdate, ClientRead } from "../interfaces";
import { clientRepo } from "../repositories";
import { clientContactsRetrieveSchema, clientReadSchema, clientReturnSchema } from "../schemas";

const clientCreate = async (payload: ClientCreate): Promise<ClientReturn> => {
  const client: Client = clientRepo.create(payload)
  await clientRepo.save(client)

  return clientReturnSchema.parse(client)
};

const clientContactsRetrieve = async (clientId: string): Promise<ClientContactsRetrieve> => {
  const foundClient: Client = (await clientRepo.findOne({
    where: {
      id: clientId
    },
    relations: {
      contacts: true
    }
  }))!

  return clientContactsRetrieveSchema.parse(foundClient);
};

const clientUpdate = async (client: Client, payload: ClientUpdate): Promise<ClientReturn> => {
  const clientUpdate: Client = await clientRepo.save({ ...client, ...payload });

  return clientReturnSchema.parse(clientUpdate)
};

const clientDestroy = async (payload: Client): Promise<void> => {
  await clientRepo.remove(payload);
};


export default {
  clientCreate,
  clientContactsRetrieve,
  clientUpdate,
  clientDestroy
};
