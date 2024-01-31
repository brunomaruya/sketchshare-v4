import { databases, appwriteConfig } from "@/lib/appwrite/config";
import React, { createContext, useEffect, useState } from "react";

export const PostsContext = createContext({} as any);

export default function PostsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PostsContext.Provider value={{}}>{children}</PostsContext.Provider>;
}
