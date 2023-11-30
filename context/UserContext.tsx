" use client";
import { createUserDocument, getUser } from "@/lib/appwrite/api";
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
  init: any;
};

export const UserContext = createContext({} as UserContextType);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<CurrentUserType | any>(null);
  const [usersList, setUsersList] = useState<any>(null);

  const init = async () => {
    console.log("account.get() initialized");
    try {
      const response = await account.get();
      setCurrentUser(response);
    } catch (err) {
      console.log("Erro eh: " + err);
    }
  };

  const listUsers = async () => {
    const promise = databases.listDocuments(
      appwriteConfig.databaseId ? appwriteConfig.databaseId : "",
      appwriteConfig.userCollectionId ? appwriteConfig.userCollectionId : ""
    );
    promise.then(
      function (response) {
        // console.log("listUsers success");
        // console.log(response); // Success
        setUsersList(response.documents);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  useEffect(() => {
    // init();
    listUsers();
  }, []);
  const values = { currentUser, setCurrentUser, usersList, init };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
