import { Client, Contact } from "../entities";
import { ContactCreate, ContactRead, ContactReturn } from "../interfaces";
import { ContactUpdate } from "../interfaces/contact.interface";
import { clientRepo, contactRepo } from "../repositories";
import { contactReturnSchema } from "../schemas";
import { contactUpdateSchema } from "../schemas/contact.schema";

const contactCreate = async (payload: ContactCreate, clientId: string): Promise<ContactReturn> => {

  const getClient: Client | null = await clientRepo.findOneBy({ id: clientId })

  const contactObj = contactRepo.create({
    ...payload,
    client: getClient!
  });

  await contactRepo.save(contactObj);

  return contactReturnSchema.parse(contactObj)
};

const contactRead = async (): Promise<ContactRead> => {
  return await contactRepo.find();
};

const contactUpdate = async (contact: Contact, payload: ContactUpdate): Promise<ContactReturn> => {
  const contactUpdate: Contact = await contactRepo.save({ ...contact, ...payload });

  return contactUpdateSchema.parse(contactUpdate);
};

const contactDestroy = async (payload: Contact): Promise<void> => {
  await contactRepo.remove(payload);
};

export default {
  contactCreate,
  contactRead,
  contactUpdate,
  contactDestroy
};