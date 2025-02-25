import * as z from "zod";

export const ToDoSchema = z.object({
  content: z.string().min(1, "Le contenu est requis"),
  isCheck: z.boolean().default(false),
});
