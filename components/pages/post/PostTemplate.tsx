"use client";
import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../../context/PostsContext";
import PostCarousel from "./PostCarousel";
import { Spinner } from "@nextui-org/react";

export default function PostTemplate() {
  const pathName = window.location.pathname;
  const { posts } = useContext(PostsContext);
  const [postId, setPostId] = useState<String>();
  const [post, setPost] = useState<any>();
  const [position, setPosition] = useState<any>();
  const [nextPostId, setNextPostId] = useState<any>();
  const [prevPostId, setPrevPostId] = useState<any>();

  const definePostId = () => {
    const postPath = pathName.split("/")[2];
    setPostId(postPath);
  };
  const definePost = () => {
    const pagePost = posts.find((post: any) => post.$id === postId);
    setPost(pagePost);
  };
  const definePosition = () => {
    const index = posts.findIndex((post: any) => post.$id === postId);
    setPosition(index);
  };

  const defineNextPostId = () => {
    const index = posts.findIndex((post: any) => post.$id === postId);
    const nextPost = posts[index + 1];
    setNextPostId(nextPost.$id);
  };
  const definePrevPostId = () => {
    const index = posts.findIndex((post: any) => post.$id === postId);
    const prevPost = posts[index - 1];
    setPrevPostId(prevPost.$id);
  };

  useEffect(() => {
    definePostId();
  }, []);

  useEffect(() => {
    if (posts !== undefined) {
      definePost();
      definePosition();
      defineNextPostId();
      definePrevPostId();
    }
  }, [posts]);

  return (
    <div className="m-default">
      <div className="w-[80%]">
        {post ? (
          <PostCarousel
            src={post.imageUrl}
            nextPostId={nextPostId}
            prevPostId={prevPostId}
          />
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}
