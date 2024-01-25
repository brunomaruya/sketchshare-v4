"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import Gallery from "../../custom/Gallery";
import { userPosts } from "@/lib/appwrite/api";

export default function UserGallery() {
  const [posts, setPosts] = useState<any>();
  const [userPath, setUserPath] = useState<any>();
  const [userId, setUserId] = useState<any>();
  const { currentUser, usersList } = useContext(UserContext);
  const pathName = window.location.pathname;

  async function fetchDatas() {
    const userPostsResponse = await userPosts(userId);
    userPostsResponse && setPosts(userPostsResponse.postedArt);
  }

  useEffect(() => {
    const userPathConst = pathName.split("/")[2];
    setUserPath(userPathConst);
  }, []);

  useEffect(() => {
    if (currentUser) {
      if (userId) {
        fetchDatas();
      }
    }
  }, [currentUser, userId]);

  useEffect(() => {
    if (usersList) {
      if (userPath) {
        const result = usersList.find(
          (user: any) => user.username == userPath
        ).$id;
        setUserId(result);
      }
    }
  }, [usersList]);

  return <Gallery posts={posts} />;
}
