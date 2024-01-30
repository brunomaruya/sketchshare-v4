import { databases, appwriteConfig } from "@/lib/appwrite/config";
import React, { createContext, useEffect, useState } from "react";

export const PostsContext = createContext({} as any);

export default function PostsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [posts, setPosts] = useState<any>();

  const definePosts = async () => {
    const promise = databases.listDocuments(
      appwriteConfig.databaseId ? appwriteConfig.databaseId : "",
      appwriteConfig.postCollectionId ? appwriteConfig.postCollectionId : ""
    );
    promise.then(
      function (response) {
        setPosts(response.documents);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  useEffect(() => {
    definePosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
