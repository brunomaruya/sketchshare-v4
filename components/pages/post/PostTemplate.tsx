"use client";
import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../../context/PostsContext";
import CarouselComp from "../../custom/CarouselComp";
import { SelectImageContext } from "../../../context/SelectedImageContext";
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

  return (
    <div>
      <PostCarousel position={position} posts={posts} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        blanditiis omnis provident saepe? Excepturi hic voluptatum expedita
        veritatis quam mollitia ea, sunt, obcaecati numquam magnam alias
        blanditiis perferendis quibusdam omnis.
      </div>
    </div>
  );
}
