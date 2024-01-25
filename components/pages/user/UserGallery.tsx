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
