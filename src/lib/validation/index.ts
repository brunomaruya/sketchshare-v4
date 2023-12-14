import * as z from "zod";

export const SignUpValidation = z
  .object({
    username: z.string().min(4, { message: "Too short" }).max(50),
    email: z.string().email(),
    password: z.string().min(5, { message: "Too short" }).max(50),
    confirm: z.string().min(5, { message: "Too short" }).max(50),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });
export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Too short" }).max(50),
});
