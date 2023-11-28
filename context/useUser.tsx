" use client";
import { account } from "@/lib/appwrite/config";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});

export const useUser = () => {
  return useContext(UserContext);
};

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState({});

  const values = { currentUser };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
