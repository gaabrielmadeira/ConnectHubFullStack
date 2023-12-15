import { z } from "zod";
import { contactReturnSchema } from "./contact.schema";

const clientSchema = z.object({
  id: z.string().uuid(),
  name: z.string().max(50),
  email: z.string().max(50).email(),
  password: z.string().max(120),
  telephone: z.string().max(15).nullable().array(),
  createdAt: z.string().or(z.date())
});

const clientCreateSchema = clientSchema.omit({
  id: true,
  createdAt: true
});

const clientReturnSchema = clientSchema.omit({
  password: true
});

const clientReadSchema = clientReturnSchema.array();

const clientContactsRetrieveSchema = clientSchema.omit({
  password: true
}).extend({
  contacts: contactReturnSchema.array()
});

const clientUpdateSchema = clientReturnSchema.partial();

export {
  clientSchema,
  clientCreateSchema,
  clientReturnSchema,
  clientReadSchema,
  clientContactsRetrieveSchema,
  clientUpdateSchema
};