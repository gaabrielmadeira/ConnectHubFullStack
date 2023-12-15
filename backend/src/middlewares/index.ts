import handleErrors from "./handleErrors.middlewares";
import validatedBody from "./validateBody.middleware";
import clientExist from "./clientExist.middleware";
import contactExist from "./contactExist.middleware";
import uniqueEmail from "./uniqueEmail.middleware";
import validatePhones from "./validatePhones";
import duplicatePhones from "./duplicatedTelephones";
import duplicateContact from "./duplicatedContact.middleware";

export {
  handleErrors,
  validatedBody,
  clientExist,
  contactExist,
  uniqueEmail,
  validatePhones,
  duplicatePhones,
  duplicateContact
};