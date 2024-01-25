"use client";
import { appwriteConfig, databases } from "@/lib/appwrite/config";
import Image from "next/image";
import React, { use, useContext, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { UserContext } from "../../../context/UserContext";
import CircularProgress from "@mui/material/CircularProgress";
import Gallery from "../../custom/Gallery";

export default function UserGallery() {
  const [posts, setPosts] = useState<any>();
  const [userPath, setUserPath] = useState<any>();
  const [pageUserId, setPageUserId] = useState<any>();

  const { currentUser, usersList } = useContext(UserContext);
  const pathName = window.location.pathname;

  useEffect(() => {
    const userPathConst = pathName.split("/")[2];
    setUserPath(userPathConst);
  }, []);

  const listPosts = async () => {
    console.log("listPosts called");
    const promise = databases.getDocument(
      appwriteConfig.databaseId ? appwriteConfig.databaseId : "",
      appwriteConfig.userCollectionId ? appwriteConfig.userCollectionId : "",
      pageUserId
    );
    promise.then(
      function (response) {
        console.log("response: ");
        console.log(response);
        setPosts(response.postedArt);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      if (pageUserId) {
        console.log();
        listPosts();
        console.log("Posts: ");
        console.log(posts);
      }
    }
  }, [currentUser, pageUserId]);

  useEffect(() => {
    if (usersList) {
      if (userPath) {
        const result = usersList.find(
          (user: any) => user.username == userPath
        ).$id;
        setPageUserId(result);
      }
    }
  }, [usersList]);

  return <Gallery posts={posts} />;
}
