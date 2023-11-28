"use client";
import React, { use, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteSession } from "@/lib/appwrite/api";

export default function SignOutBtn() {
  const signOut = () => {
    deleteSession();
    window.location.assign("/sign-in");
  };
  return <button onClick={signOut}>Sign Out</button>;
}
