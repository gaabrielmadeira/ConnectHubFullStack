import { z } from "zod";

export const AddContactsSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  email: z.string().min(1, { message: "O e-mail é obrigatório" }).email("Digite um e-mail válido."),
  telephone1: z.string(),
  telephone2: z.string(),
}).refine(({telephone1, telephone2}) => telephone1 !== telephone2, {
  message: "Os números de telefone não podem ser iguais e ao menos um número deve ser fornecido.",
  path: ["telephone2"],
})

export type TAddContactForm = z.infer<typeof AddContactsSchema>;
