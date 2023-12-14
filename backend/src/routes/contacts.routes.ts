import { Router } from "express";
import {
  contactExist,
  duplicateContact,
  duplicatePhones,
  validatePhones,
  validatedBody
} from "../middlewares";
import { contactCreateSchema } from "../schemas";
import validateToken from "../middlewares/validateToken.middleware";
import { contactsController } from "../controllers";
import { contactUpdateSchema } from "../schemas/contact.schema";

const contactRouter: Router = Router();

contactRouter.use("", validateToken);

contactRouter.post("",
  validatedBody(contactCreateSchema),
  validatePhones,
  duplicatePhones,
  duplicateContact,
  contactsController.contactCreate
);

contactRouter.get("",
  contactsController.contactRead
);

contactRouter.use("/:contactId", validateToken, contactExist);

contactRouter.patch("/:contactId",
  validatedBody(contactUpdateSchema),
  validatePhones,
  duplicatePhones,
  contactsController.contactUpdate
);

contactRouter.delete("/:contactId", contactsController.contactDestroy);

export default contactRouter;