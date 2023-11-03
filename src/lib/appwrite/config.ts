import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: process.env.NEXT_PUBLIC_APPWRITE_ID,
  url: process.env.NEXT_PUBLIC_APPWRITE_URL,
};

export const client = new Client();

// client.setProject("6544eded485216d1cac8");
// client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject(appwriteConfig.projectId ? appwriteConfig.projectId : "");
client.setEndpoint(appwriteConfig.url ? appwriteConfig.url : "");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
