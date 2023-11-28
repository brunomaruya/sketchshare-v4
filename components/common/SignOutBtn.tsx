"use client";
import React, { use, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { deleteSession } from "@/lib/appwrite/api";

export default function SignOutBtn() {
  return <button onClick={signOut}>Sign Out</button>;
}
const signOut = () => {
  deleteSession();
  window.location.assign("/");
};
