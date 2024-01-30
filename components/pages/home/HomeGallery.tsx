"use client";
import React, { useContext, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { images } from "../../constants/images";
import Image from "next/image";
import { appwriteConfig, databases } from "@/lib/appwrite/config";
import Gallery from "../../custom/Gallery";
import { PostsContext } from "../../../context/PostsContext";

export default function HomeGallery() {
  const { posts } = useContext(PostsContext);

  return <Gallery posts={posts} />;
}
