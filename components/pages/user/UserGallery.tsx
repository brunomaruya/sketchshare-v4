"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import Gallery from "../../custom/Gallery";
import { userPosts } from "@/lib/appwrite/api";
export interface IPosts {
  caption: any;
  tags: any[];
  imageUrl: string;
  imageId: string;
  location: any;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
}

export default function UserGallery() {
  const [posts, setPosts] = useState<IPosts[]>();
  const [userPath, setUserPath] = useState<String>();
  const [userId, setUserId] = useState<String>();
  const { currentUser, usersList } = useContext(UserContext);
  const pathName = window.location.pathname;

  async function fetchDatas() {
    if (typeof userId === "string") {
      const userPostsResponse = await userPosts(userId);
      userPostsResponse && setPosts(userPostsResponse.postedArt);
    }
  }
  useEffect(() => {
    const userPath = pathName.split("/")[2];
    setUserPath(userPath);
  }, []);

  useEffect(() => {
    if (usersList) {
      if (userPath) {
        const pageUser = usersList.find(
          (user: any) => user.username == userPath
        ).$id;
        setUserId(pageUser);
      }
    }
  }, [usersList]);

  useEffect(() => {
    if (currentUser) {
      if (userId) {
        fetchDatas();
      }
    }
  }, [currentUser, userId]);

  return <Gallery posts={posts} />;
}
