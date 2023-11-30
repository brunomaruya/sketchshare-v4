"use client";
import React, { use, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { deleteSession } from "@/lib/appwrite/api";

export default function SignOutBtn() {
  const { setCurrentUser } = useContext(UserContext);
  const signOut = () => {
    deleteSession();
    setCurrentUser(null);
  };
  return <button onClick={signOut}>Sign Out</button>;
}
