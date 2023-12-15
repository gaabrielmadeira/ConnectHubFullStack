import { z } from "zod";
import {
  clientCreateSchema,
  clientReadSchema,
  clientReturnSchema,
  clientUpdateSchema,
  clientContactsRetrieveSchema
} from "../schemas";

type ClientCreate = z.infer<typeof clientCreateSchema>;
type ClientReturn = z.infer<typeof clientReturnSchema>;
type ClientRead = z.infer<typeof clientReadSchema>;
type ClientContactsRetrieve = z.infer<typeof clientContactsRetrieveSchema>;
type ClientUpdate = z.infer<typeof clientUpdateSchema>;

export {
  ClientCreate,
  ClientReturn,
  ClientRead,
  ClientUpdate,
  ClientContactsRetrieve
};