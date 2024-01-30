"use client";
import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../../context/PostsContext";
import CarouselComp from "../../custom/CarouselComp";
import { SelectImageContext } from "../../../context/SelectedImageContext";

export default function PostTemplate() {
  const { imageIndex, setImageIndex } = useContext(SelectImageContext);
  const { posts } = useContext(PostsContext);
  const pathName = window.location.pathname;
  const [postId, setPostId] = useState<String>();
  const [post, setPost] = useState<any>();
  const [position, setPosition] = useState<any>();

  useEffect(() => {
    const postPath = pathName.split("/")[2];
    setPostId(postPath);
  }, []);

  useEffect(() => {
    if (posts !== undefined) {
      const pagePost = posts.find((post: any) => post.$id === postId);
      console.log(posts);
      setPost(pagePost);
    }
  }, [posts]);

  useEffect(() => {
    if (posts !== undefined) {
      const index = posts.findIndex((post: any) => post.$id === postId);
      setPosition(index);
      console.log(index);
    }
  }, [posts]);

  return (
    <div>
      <CarouselComp index={position} posts={posts} />
    </div>
  );
}
