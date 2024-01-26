"use client";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { images } from "../../constants/images";
import Image from "next/image";
import { appwriteConfig, databases } from "@/lib/appwrite/config";
import Gallery from "../../custom/Gallery";

export default function HomeGallery() {
  const [posts, setPosts] = useState<any>();

  const listPosts = async () => {
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
    listPosts();
  }, []);

  return <Gallery posts={posts} />;
}
