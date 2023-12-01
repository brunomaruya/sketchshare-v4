"use client";
import { appwriteConfig, databases } from "@/lib/appwrite/config";
import Image from "next/image";
import React, { use, useContext, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { UserContext } from "../../context/UserContext";

export default function UserGallery() {
  const [posts, setPosts] = useState<any>();
  const [userPath, setUserPath] = useState<any>();
  const [pageUserId, setPageUserId] = useState<any>();

  const { currentUser, usersList } = useContext(UserContext);
  const pathName = window.location.pathname;

  useEffect(() => {
    const userPathConst = pathName.split("/")[2];
    setUserPath(userPathConst);
    console.log("userPath: ");
    console.log(userPath);
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
        console.log(
          "disgraaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaa22222222222222222"
        );
        listPosts();
        console.log("Posts: ");
        console.log(posts);
      }
    }
  }, [currentUser, pageUserId]);

  useEffect(() => {
    if (usersList) {
      if (userPath) {
        console.log("porcariaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        const result = usersList.find(
          (user: any) => user.username == userPath
        ).$id;
        setPageUserId(result);
      }
    }
  }, [usersList]);

  const gallery = posts
    ? posts.map((post: any, index: any) => {
        console.log("disgracaaaaaaaaaaaaaaaaaaaaaa");
        return (
          <div className="rounded-md relative" key={index}>
            <Image
              className="rounded-md"
              src={post.imageUrl}
              width={500}
              height={500}
              alt="image"
            />
          </div>
        );
      })
    : "no data";

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      {posts ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid m-default"
          columnClassName="my-masonry-grid_column"
        >
          {gallery}
        </Masonry>
      ) : (
        "Loading..."
      )}
    </>
  );
}
