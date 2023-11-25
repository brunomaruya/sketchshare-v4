import { INewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

export const createNewAccount = async ({
  email,
  password,
  username,
}: INewUser) => {
  try {
    await account.create(ID.unique(), email, password, username);
    console.log("Acho que deu tudo certo");
  } catch (err) {
    console.log("Alguma coisa deu errado: " + err);
  }
};
