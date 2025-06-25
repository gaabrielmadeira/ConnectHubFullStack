import { compare } from "bcryptjs";
import { Client } from "../entities";
import { AppError } from "../errors";
import { sessionCreate, sessionReturn } from "../interfaces";
import { clientRepo } from "../repositories";
import { sign, Secret, SignOptions } from "jsonwebtoken";
import { clientReturnSchema } from "../schemas";

const clientLogin = async (payload: sessionCreate): Promise<sessionReturn> => {
  const { email, password } = payload

  const foundClient: Client | null = await clientRepo.findOneBy({ email: email });

  if (!foundClient) throw new AppError("Invalid credencials.", 401);

  const validPassword: boolean = await compare(password, foundClient.password);

  if (!validPassword) throw new AppError("Invalid credencials.", 401);

  if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY environment variable is not defined.");
  }
  if (!process.env.EXPIRES_IN) {
    throw new Error("EXPIRES_IN environment variable is not defined.");
  }
 const token: string = sign(
  { email: foundClient.email } as object,
  process.env.SECRET_KEY as Secret,
  {
    subject: foundClient.id.toString(),
    expiresIn: (process.env.EXPIRES_IN || '1d') as string
  } as SignOptions
);

  const clientParse = clientReturnSchema.parse(foundClient);

  return {
    token,
    user: clientParse
  };
};

export default { clientLogin };