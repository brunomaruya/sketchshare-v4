" use client";
import { getCurrentUser, listUsers } from "@/lib/appwrite/api";

import React, { createContext, useEffect, useState } from "react";
import { ICurrentUser, IUserList } from "../types/types";

type UserContextType = {
  currentUser: ICurrentUser | any;
  setCurrentUser: React.Dispatch<ICurrentUser | null>;
  usersList: IUserList[] | any;
};

export const UserContext = createContext({} as UserContextType);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<ICurrentUser | null>(null);
  const [usersList, setUsersList] = useState<any>();
  //TODO:
  // const [usersList, setUsersList] = useState<IUserList[]>();

  async function fetchDatas() {
    const listUsersResponse = await listUsers();
    const getCurrentUserResponse = await getCurrentUser();

    if (getCurrentUserResponse) {
      setCurrentUser(getCurrentUserResponse);
    }
    if (listUsersResponse) {
      setUsersList(listUsersResponse.documents);
    }
  }

  useEffect(() => {
    fetchDatas();
  }, []);

  const values: UserContextType = { currentUser, setCurrentUser, usersList };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
