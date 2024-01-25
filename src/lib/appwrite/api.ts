import { INewUser } from "@/types";
import { account, databases, appwriteConfig } from "./config";
import { ID } from "appwrite";

export const createNewAccount = async ({
  email,
  password,
  username,
}: INewUser) => {
  try {
    await account.create(ID.unique(), email, password, username);
    return true;
  } catch (err) {
    console.log("createNewAccount() error: " + err);
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
    await account.createEmailSession(email, password);
    return true;
  } catch (err) {
    console.log("login() error: " + err);
    return false;
  }
};

export const getCurrentUser = async () => {
  try {
    const promise = await account.get();

    return promise;
  } catch (err) {
    console.log("getUser() error " + err);
  }
};

export const deleteSession = async () => {
  try {
    account.deleteSession("current");
    window.location.assign("/sign-in");
  } catch (err) {
    console.log("deleteSession(): " + err);
  }
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
  try {
    await databases
      .createDocument(
        appwriteConfig.databaseId ? appwriteConfig.databaseId : "",
        appwriteConfig.userCollectionId ? appwriteConfig.userCollectionId : "",
        accountId,
        { accountId: accountId, username: username, email: email }
      )
      .then(function () {
        window.location.assign("/");
      });

    return true;
  } catch (err) {
    console.log("createUserDocument() error: " + err); // Failure
    return false;
  }
};

export const listUsers = async () => {
  const promise = await databases.listDocuments(
    appwriteConfig.databaseId ? appwriteConfig.databaseId : "",
    appwriteConfig.userCollectionId ? appwriteConfig.userCollectionId : ""
  );

  try {
    return promise.documents;
  } catch (err) {
    console.log("listUsers error: " + err);
  }
};

export const userPosts = async (userId: string) => {
  const promise = databases.getDocument(
    appwriteConfig.databaseId ? appwriteConfig.databaseId : "",
    appwriteConfig.userCollectionId ? appwriteConfig.userCollectionId : "",
    userId
  );

  try {
    return promise;
  } catch (err) {
    console.log("listUserPosts() error: " + err);
  }

  // promise.then(
  //   function (response) {
  //     setPosts(response.postedArt);
  //   },
  //   function (error) {
  //     console.log(error); // Failure
  //   }
  // );
};
