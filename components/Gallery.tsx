"use client";
import React from "react";
import Masonry from "react-masonry-css";
import { images } from "../consts/images";
import Image from "next/image";
import { getUser } from "@/lib/appwrite/api";

export default function Gallery() {
  const gallery = images.map((image, index) => {
    return (
      <div className="rounded-md" key={index}>
        <Image
          className="rounded-md"
          src={image.imgLink}
          width={500}
          height={500}
          alt="image"
        />
      </div>
    );
  });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid m-default"
      columnClassName="my-masonry-grid_column"
    >
      {gallery}
    </Masonry>
  );
}
