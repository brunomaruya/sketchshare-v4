import * as z from "zod";

export const SignUpValidation = z.object({
  username: z.string().min(4, { message: "Too short" }).max(50),
  email: z.string().email(),
  password: z.string().min(5, { message: "Too short" }).max(50),
});
