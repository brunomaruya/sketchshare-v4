import { INewUser } from "@/types";
import { account, databases, appwriteConfig } from "./config";
import { ID } from "appwrite";
import { CurrentUserType } from "../../../context/UserContext";

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
    console.log("Conta criada com sucesso:");
    console.log(promise);
  } catch (err) {
    console.log("Alguma coisa deu errado em createNewAccount: " + err);
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
    await account.createEmailSession(email, password);
    console.log("Logado com sucesso");
  } catch (err) {
    console.log("Alguma coisa deu errado em login: " + err);
  }
};

export const getUser = async () => {
  try {
    await account.get().then(function (resolver) {
      console.log("getUser success:");
      console.log(resolver);

      return resolver;
    });
  } catch (err) {
    console.log("Alguma coisa deu errado: " + err);
    return;
  }
};

export const deleteSession = async () => {
  const promise = account.deleteSession("current");

  promise.then(
    function (response) {
      console.log("deleteSession success");
      console.log(response); // Success
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
  const promise = databases.createDocument(
    appwriteConfig.databaseId ? appwriteConfig.databaseId : "",
    appwriteConfig.userCollectionId ? appwriteConfig.userCollectionId : "",
    ID.unique(),
    { accountId: accountId, username: username, email: email }
  );

  promise.then(
    function (response) {
      console.log("createUserDocument success:");
      console.log(response); // Success
    },
    function (error) {
      console.log("ERRRRRROOOOOO: " + error); // Failure
    }
  );
};
