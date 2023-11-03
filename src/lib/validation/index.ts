import * as z from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Too short" }).max(50),
  username: z.string().min(4, { message: "Too short" }).max(50),
  email: z.string().email(),
  password: z.string().min(5, { message: "Too short" }).max(50),
});
