import { z } from "zod";
import { contactCreateSchema, contactReadSchema, contactReturnSchema } from "../schemas";
import { contactUpdateSchema } from "../schemas/contact.schema";

type ContactCreate = z.infer<typeof contactCreateSchema>;
type ContactReturn = z.infer<typeof contactReturnSchema>;
type ContactRead = z.infer<typeof contactReadSchema>;
type ContactUpdate = z.infer<typeof contactUpdateSchema>;

export {
  ContactCreate,
  ContactReturn,
  ContactRead,
  ContactUpdate
};