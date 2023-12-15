import { z } from "zod";
import { clientSchema } from "./client.schema";

const contactSchema = z.object({
  id: z.string().uuid(),
  name: z.string().max(50),
  email: z.string().max(50).email(),
  telephone: z.string().max(15).nullable().array(),
  createdAt: z.string().or(z.date()),
  client: clientSchema
});

const contactCreateSchema = contactSchema.omit({
  id: true,
  createdAt: true,
  client: true
});

const contactReturnSchema = contactSchema.omit({
  client: true
});

const contactReadSchema = contactReturnSchema.array();
const contactUpdateSchema = contactReturnSchema.partial();

export {
  contactSchema,
  contactCreateSchema,
  contactReturnSchema,
  contactReadSchema,
  contactUpdateSchema
};



