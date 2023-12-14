"use client";
import * as z from "zod";
import React, { use, useState } from "react";
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
import { SignInValidation } from "@/lib/validation";
import Image from "next/image";
import logo from "../../../../public/images/pencil.png";
import { useToast } from "@/components/ui/use-toast";
import {
  createNewAccount,
  createUserDocument,
  login,
} from "@/lib/appwrite/api";
import Link from "next/link";
import { CircularProgress } from "@mui/material";

export default function SignIn() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInValidation>) {
    setIsLoading(true);
    await login(values);
    setIsLoading(false);
    window.location.assign("/");
    console.log("onSubmit");
  }
  return (
    <Form {...form}>
      <div className="flex items-center gap-3 mb-3">
        <Image src={logo} width={35} height={35} alt="logo" />
        <h1 className="text-3xl text-primary  font-bold">SketchShare</h1>
      </div>

      <h2 className="text-xl  mb-3">Sign in</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
        <Link className="text-primary" href={"/sign-up"}>
          Don&apos;t have an account? Click here
        </Link>
        <Button type="submit" className="!mt-5 bg-accent w-full">
          {isLoading ? <CircularProgress /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
