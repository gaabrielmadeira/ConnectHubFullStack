import { compare } from "bcryptjs";
import { Client } from "../entities";
import { AppError } from "../errors";
import { sessionCreate, sessionReturn } from "../interfaces";
import { clientRepo } from "../repositories";
import { sign } from "jsonwebtoken";
import { clientReturnSchema } from "../schemas";

const clientLogin = async (payload: sessionCreate): Promise<sessionReturn> => {
  const { email, password } = payload

  const foundClient: Client | null = await clientRepo.findOneBy({ email: email });

  if (!foundClient) throw new AppError("Invalid credencials.", 401);

  const validPassword: boolean = await compare(password, foundClient.password);

  if (!validPassword) throw new AppError("Invalid credencials.", 401);

  const token: string = sign(
    { email: foundClient.email },
    process.env.SECRET_KEY!,
    { subject: foundClient.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  const clientParse = clientReturnSchema.parse(foundClient);

  return {
    token,
    user: clientParse
  };
};

export default { clientLogin };