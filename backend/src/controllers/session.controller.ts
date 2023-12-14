import { Request, Response } from "express";
import { sessionReturn } from "../interfaces";
import { sessionService } from "../services";

const clientLogin = async (req: Request, res: Response): Promise<Response> => {
  const token: sessionReturn = await sessionService.clientLogin(req.body)

  return res.status(200).json(token)
};

export default { clientLogin };