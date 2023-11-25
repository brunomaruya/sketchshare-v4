import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  url: process.env.NEXT_PUBLIC_APPWRITE_URL,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
  userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: process.env.NEXT_PUBLIC_APPWRITE_POST_COLLECTION_ID,
  savesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_SAVES_COLLECTION_ID,
};

export const client = new Client();

client.setProject(appwriteConfig.projectId ? appwriteConfig.projectId : "");
client.setEndpoint(appwriteConfig.url ? appwriteConfig.url : "");

export const account = new Account(client);
