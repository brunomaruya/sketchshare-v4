"use client";
import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../../context/PostsContext";
import PostCarousel from "./PostCarousel";

export default function PostTemplate() {
  const pathName = window.location.pathname;
  const { posts } = useContext(PostsContext);
  const [postId, setPostId] = useState<String>();
  const [post, setPost] = useState<any>();
  const [position, setPosition] = useState<any>();
  const [nextPostId, setNextPostId] = useState<any>();

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

  const defineNextPostId = () => {
    const index = posts.findIndex((post: any) => post.$id === postId);
    console.log(posts[index]);
  };

  useEffect(() => {
    definePostId();
  }, []);

  useEffect(() => {
    if (posts !== undefined) {
      definePost();
      definePosition();
      defineNextPostId();
    }
  }, [posts]);

  return (
    <div>
      {post && nextPostId ? (
        <PostCarousel src={post.imageUrl} nextPostID={nextPostId} />
      ) : (
        "..."
      )}
    </div>
  );
}
