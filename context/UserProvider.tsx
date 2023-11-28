" use client";
import { getUser } from "@/lib/appwrite/api";
import { account } from "@/lib/appwrite/config";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface CurrentUserType {
  $id: string;
  $createdAt: Date;
  $updatedAt: Date;
  name: string;
  registration: Date;
  status: boolean;
  labels: any[];
  passwordUpdate: Date;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  prefs: Object;
  accessedAt: Date;
}

type UserContextType = {
  currentUser: CurrentUserType;
};

export const UserContext = createContext({} as UserContextType);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<CurrentUserType | any>(null);

  const init = async () => {
    console.log("account.get() initialized");
    try {
      const response = await account.get();
      setCurrentUser(response);
    } catch (err) {
      console.log("Erro eh: " + err);
    }
  };
  useEffect(() => {
    init();
  }, []);
  const values = { currentUser };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
