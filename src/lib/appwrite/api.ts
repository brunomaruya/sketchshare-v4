import { INewUser } from "@/types";
import { account, databases, appwriteConfig } from "./config";
import { ID } from "appwrite";
import { CurrentUserType, UserContext } from "../../../context/UserContext";
import { useContext } from "react";

export const createNewAccount = async ({
  email,
  password,
  username,
}: INewUser) => {
  try {
    const promise = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    console.log("Conta criada:");
    console.log(promise);
    return true;
  } catch (err) {
    console.log("Alguma coisa deu errado em createNewAccount: " + err);
    return false;
  }
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const promise = await account.createEmailSession(email, password);
    console.log("Conta logada: ");
    console.log(promise);
    return true;
  } catch (err) {
    console.log("Alguma coisa deu errado em login: " + err);
    return false;
  }
};

export const getUser = async () => {
  try {
    const promise = await account.get();

    console.log("Promise: ");
    console.log(promise);
    return promise;
  } catch (err) {
    console.log("Alguma coisa deu errado: " + err);
    return false;
  }
};

export const deleteSession = async () => {
  const promise = account.deleteSession("current");

  promise.then(
    function (response) {
      console.log("deleteSession success");
      console.log(response); // Success
      window.location.assign("/sign-in");
    },
    function (error) {
      console.log(error); // Failure
    }
  );
};

//--------------------------------------------------------------------------------------//
//                                      DATABASES                                       //
//--------------------------------------------------------------------------------------//

export const createUserDocument = async ({
  accountId,
  username,
  email,
}: {
  accountId: string;
  username: string;
  email: string;
}) => {
  console.log("Criando UserDocument");
  try {
    const promise = databases
      .createDocument(
        appwriteConfig.databaseId ? appwriteConfig.databaseId : "",
        appwriteConfig.userCollectionId ? appwriteConfig.userCollectionId : "",
        accountId,
        { accountId: accountId, username: username, email: email }
      )
      .then(function () {
        window.location.assign("/");
        // console.log("indo para outra pagina");
      });
    console.log("User Document criado:");
    console.log(promise); // Success
    return true;
  } catch (err) {
    console.log("ERRRRRROOOOOO: " + err); // Failure
    return false;
  }
};
