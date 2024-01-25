" use client";
import {
  createUserDocument,
  getCurrentUser,
  getUser,
  listUsers,
} from "@/lib/appwrite/api";
import { account, appwriteConfig, databases } from "@/lib/appwrite/config";
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
  setCurrentUser: React.Dispatch<any>;
  usersList: any;
};

export const UserContext = createContext({} as UserContextType);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<CurrentUserType | any>(null);
  const [usersList, setUsersList] = useState<any>(null);

  async function fetchDatas() {
    const listUsersResponse = await listUsers();
    const getCurrentUser = await listUsers();
    setUsersList(listUsersResponse);
    setUsersList(getCurrentUser);
  }

  useEffect(() => {
    fetchDatas();
  }, []);

  const values = { currentUser, setCurrentUser, usersList };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
