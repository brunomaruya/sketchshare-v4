"use client";
import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../../context/PostsContext";
import PostCarousel from "./PostCarousel";

export default function PostTemplate() {
  const { posts } = useContext(PostsContext);
  const pathName = window.location.pathname;
  const [postId, setPostId] = useState<String>();
  const [post, setPost] = useState<any>();
  const [position, setPosition] = useState<any>();

  const definePostId = () => {
    const postPath = pathName.split("/")[2];
    setPostId(postPath);
  };
  const definePost = () => {
    const pagePost = posts.find((post: any) => post.$id === postId);
    setPost(pagePost);
    console.log(post);
  };
  const definePosition = () => {
    const index = posts.findIndex((post: any) => post.$id === postId);
    setPosition(index);
  };

  useEffect(() => {
    definePostId();
  }, []);

  useEffect(() => {
    if (posts !== undefined) {
      definePost();
      definePosition();
    }
  }, [posts]);

  return <div>{post ? <PostCarousel src={post.imageUrl} /> : "..."}</div>;
}
