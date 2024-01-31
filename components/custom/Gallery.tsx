"use client";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import React, { use, useContext, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "../constants/masonry/breakpointColumnsObj";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Link from "next/link";

export default function Gallery({ posts }: { posts: any }) {
  const [index, setIndex] = useState(-1);
  const [urls, setUrls] = useState<any>([]);

  async function defineUrls() {
    (await posts)
      ? posts.map((post: any) =>
          setUrls((oldUrls: any) => [
            ...oldUrls,
            {
              src: post.imageUrl,
              title: (
                <div>
                  <Link href="/">user</Link>
                </div>
              ),
              description: <div>description</div>,
            },
          ])
        )
      : "";
  }
  useEffect(() => {
    defineUrls();
  }, [posts]);

  const gallery = posts
    ? posts.map((post: any, index: any) => {
        return (
          <div className="rounded-md relative" key={index}>
            <Image
              onClick={() => setIndex(index)}
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
      <Lightbox
        plugins={[Captions]}
        slides={urls}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        captions={{ showToggle: true }}
      />
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
