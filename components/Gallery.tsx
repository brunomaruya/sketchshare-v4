"use client";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { images } from "../consts/images";
import Image from "next/image";
import { appwriteConfig, databases } from "@/lib/appwrite/config";
import { CircularProgress } from "@mui/material";

export default function Gallery() {
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
    // init();
    listPosts();
  }, []);

  const gallery = posts
    ? posts.map((post: any, index: any) => {
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
        <div>
          <CircularProgress />
        </div>
      )}
    </>
  );
}
