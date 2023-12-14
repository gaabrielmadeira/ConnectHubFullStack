import { z } from "zod";

export const EditContactSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  telephone1: z.string().optional(),
  telephone2: z.string().optional(),
}).refine(({ telephone1, telephone2 }) => telephone1 !== telephone2 || (telephone1 === "" && telephone2 === ""), {
  message: "Os números de telefone não podem ser iguais.",
  path: ["telephone2"],
});

export type TEditContactForm = z.infer<typeof EditContactSchema>;