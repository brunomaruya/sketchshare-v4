"use client";
import * as z from "zod";
import React, { use, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpValidation } from "@/lib/validation";
import Image from "next/image";
import logo from "../../../../public/images/pencil.png";
import { useToast } from "@/components/ui/use-toast";
import {
  createNewAccount,
  createUserDocument,
  login,
} from "@/lib/appwrite/api";
import Link from "next/link";
import { UserContext } from "../../../../context/UserContext";
import { account } from "@/lib/appwrite/config";

export default function SignUp() {
  const { toast } = useToast();
  const { currentUser } = useContext(UserContext);

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      username: "test",
      email: "test@test.com",
      password: "testando",
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    await createNewAccount(values);
    await login(values);

    const promise = account.get();

    promise.then(
      function (response) {
        console.log("get success");
        console.log(response); // Success
      },
      function (error) {
        console.log("errrrrrro: " + error); // Failure
      }
    );
    // console.log("currentUser:");
    // console.log(currentUser);

    await createUserDocument({
      accountId: currentUser.$id,
      email: currentUser.email,
      username: currentUser.name,
    });
    window.location.assign("/");
  }
  return (
    <Form {...form}>
      <div className="flex items-center gap-3 mb-3">
        <Image src={logo} width={35} height={35} alt="logo" />
        <h1 className="text-3xl text-primary  font-bold">SketchShare</h1>
      </div>

      <h2 className="text-xl  mb-3">Create an Account</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage className="form-message " />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage className="form-message " />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} type="password" />
              </FormControl>
              <FormMessage className="form-message " />
            </FormItem>
          )}
        />
        <Link className="text-primary" href={"/sign-in"}>
          Already have an account?
        </Link>
        <Button type="submit" className="!mt-5 bg-accent w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
