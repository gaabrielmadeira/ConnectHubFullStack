import { Router } from "express";
import { clientController } from "../controllers";
import {
  clientExist,
  duplicatePhones,
  uniqueEmail,
  validatePhones,
  validatedBody
} from "../middlewares";
import { clientCreateSchema, clientUpdateSchema } from "../schemas";
import validateToken from "../middlewares/validateToken.middleware";

const clientRouter: Router = Router();

clientRouter.post("",
  validatedBody(clientCreateSchema),
  validatePhones,
  duplicatePhones,
  uniqueEmail,
  clientController.clientCreate
);

clientRouter.use("/:clientId",
  validateToken,
  clientExist
);
clientRouter.get("/:clientId/contacts", clientController.clientContactsRetrieve);
clientRouter.patch("/:clientId",
  validatedBody(clientUpdateSchema),
  validatePhones,
  duplicatePhones,
  clientController.clientUpdate
);
clientRouter.delete("/clientId", clientController.clientDestroy);


export default clientRouter;