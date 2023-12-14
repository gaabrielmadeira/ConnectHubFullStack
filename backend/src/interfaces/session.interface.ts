import { z } from "zod";
import { sessionSchema } from "../schemas";
import { ClientReturn } from "./client.interface";

type sessionReturn = {
  token: string;
  user: ClientReturn
};

type sessionCreate = z.infer<typeof sessionSchema>

export {
  sessionCreate,
  sessionReturn
}