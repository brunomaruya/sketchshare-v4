import { INewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";
import { CurrentUserType } from "../../../context/UserProvider";

export const createNewAccount = async ({
  email,
  password,
  username,
}: INewUser) => {
  try {
    await account.create(ID.unique(), email, password, username);
    console.log("Conta criada com sucesso");
  } catch (err) {
    console.log("Alguma coisa deu errado: " + err);
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
    console.log("Alguma coisa deu errado: " + err);
  }
};

export const getUser = async () => {
  try {
    await account.get().then(function (resolver) {
      console.log("getUser success");
      console.log(resolver);

      return resolver;
    });
  } catch (err) {
    console.log("Alguma coisa deu errado: " + err);
    return;
  }
};
