import z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email("Insira um email válido.").min(1),
  password: z.string()
});

export type TLoginForm = z.infer<typeof LoginFormSchema>;