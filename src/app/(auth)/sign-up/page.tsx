"use client";
import * as z from "zod";
import React, { use, useContext, useEffect, useState } from "react";
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
  getCurrentUser,
  login,
} from "@/lib/appwrite/api";
import Link from "next/link";
import { UserContext } from "../../../../context/UserContext";
import { account } from "@/lib/appwrite/config";
import { CircularProgress } from "@mui/material";

export default function SignUp() {
  const { currentUser, setCurrentUser, usersList } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const reset = async () => {
    try {
      setIsLoading(false);
      setCurrentUser(null);
    } catch (err) {
      console.log("setCurrentUser falhou: " + err);
    }
  };
  function userDocumentExist() {
    if (currentUser && usersList) {
      for (let i in usersList) {
        if (usersList[i].accountId === currentUser.$id) {
          return true;
        }
        return false;
      }
    }
  }

  useEffect(() => {
    reset();

    const exist = userDocumentExist();

    if (currentUser) {
      if (!exist) {
        createUserDocument({
          accountId: currentUser.$id,
          email: currentUser.email,
          username: currentUser.name,
        });
      }
    }
  }, [currentUser]);
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    setIsLoading(true);
    const createNewAccountSuccess = await createNewAccount(values);

    if (createNewAccountSuccess) {
      const loginSuccess = await login(values);
      if (loginSuccess) {
        const getCurrentUserSuccess = await getCurrentUser();
        if (getCurrentUserSuccess) {
          setCurrentUser(getCurrentUserSuccess);
        }
      }
    }
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
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="confirm password"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage className="form-message " />
            </FormItem>
          )}
        />
        <Link className="text-primary" href={"/sign-in"}>
          Already have an account? Click here
        </Link>
        <Button type="submit" className="!mt-5 bg-accent w-full">
          {isLoading ? <CircularProgress /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
