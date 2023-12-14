import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validatedBody =
  (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction) => {
      req.body = schema.parse(req.body)

      return next()
    };

export default validatedBody;