import { CircularProgress } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "../constants/masonry/breakpointColumnsObj";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery({ posts }: { posts: any }) {
  const [index, setIndex] = useState(-1);

  const [urls, setUrls] = useState<any>([]);

  async function createUrlsArray() {
    (await posts)
      ? posts.map((post: any) =>
          setUrls((oldUrls: any) => [
            ...oldUrls,
            { src: post.imageUrl, title: "slide", description: "description" },
          ])
        )
      : "";
  }
  const inline = {
    style: {
      width: "100%",
      maxWidth: "900px",
      aspectRatio: "3 / 2",
      margin: "0 auto",
    },
  };

  useEffect(() => {
    createUrlsArray();
  }, [posts]);

  const gallery = posts
    ? posts.map((post: any, index: any) => {
        return (
          <div className="rounded-md relative" key={index}>
            <Image
              onClick={() => {
                urls[index] !== undefined
                  ? setIndex(index)
                  : console.log("err");
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
      {urls !== undefined ? (
        <Lightbox
          // index={index}
          slides={urls}
          // open={index >= 0}
          // close={() => setIndex(-1)}
          inline={inline}
          plugins={[Inline]}
        />
      ) : (
        ""
      )}

      {/* {posts ? (
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
      )} */}
    </>
  );
}
