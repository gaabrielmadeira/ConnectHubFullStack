import { AppDataSource } from "./data-source";
import { Client, Contact } from "./entities";

const clientRepo = AppDataSource.getRepository(Client);
const contactRepo = AppDataSource.getRepository(Contact);

export {
  clientRepo,
  contactRepo
};