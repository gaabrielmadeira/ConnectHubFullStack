import { z } from "zod";


export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  email: z.string().min(1, { message: "O e-mail é obrigatório" }).email("Digite um e-mail válido."),
  password: z
    .string()
    .min(6, "A senha precisa conter pelo menos 6 caracteres."),
  confirm: z.string(),
  telephone1: z.string(),
  telephone2: z.string(),
}).refine(({telephone1, telephone2}) => telephone1 !== telephone2, {
  message: "Os números de telefone não podem ser iguais e ao menos um número deve ser fornecido.",
  path: ["telephone2"],
}).refine(({ password, confirm }) => password === confirm, {
  message: "As senhas não correspondem.",
  path: ["confirm"],
})

export type TRegisterForm = z.infer<typeof RegisterSchema>;

