" use client";
import { getUser } from "@/lib/appwrite/api";
import { account } from "@/lib/appwrite/config";
import React, { createContext, useContext, useEffect, useState } from "react";

type CurrentUserType = {
  name: string;
};

type UserContextType = {
  currentUser: CurrentUserType;
};

export const UserContext = createContext({} as UserContextType);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<CurrentUserType>({ name: "" });
  useEffect(() => {
    setCurrentUser({ name: "ba" });
  }, []);

  const values = { currentUser };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
