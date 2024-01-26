import { CircularProgress } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "../constants/masonry/breakpointColumnsObj";
import CarouselComp from "./CarouselComp";

export default function Gallery({ posts }: { posts: any }) {
  const [index, setIndex] = useState(-1);
  const gallery = posts
    ? posts.map((post: any, index: any) => {
        return (
          <div className="rounded-md relative" key={index}>
            <Image
              onClick={() => {
                setIndex(index);
              }}
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

  return (
    <>
      <CarouselComp posts={posts} index={index} />
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
