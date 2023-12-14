import { clientSchema } from "./client.schema";

const sessionSchema = clientSchema.pick({
  email: true,
  password: true,
});

export default sessionSchema;
