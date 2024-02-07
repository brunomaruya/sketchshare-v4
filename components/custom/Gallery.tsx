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
import { divider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
export default function Gallery({ posts }: { posts: any }) {
  const [index, setIndex] = useState(-1);
  const [urls, setUrls] = useState<any>([]);
  const pathname = usePathname();
  const userNameFromPathName = () => {
    const pathnameArr = pathname.split("/");
    return pathnameArr[pathnameArr.length - 1];
  };

  async function defineUrls() {
    (await posts)
      ? posts.map((post: any) =>
          setUrls((oldUrls: any) => [
            ...oldUrls,
            {
              src: post.imageUrl,
              title: (
                <div>
                  {post.postCreator ? (
                    post.postCreator.map((creator: any, index: any) => (
                      <div
                        className="hover:cursor-pointer "
                        onClick={() =>
                          window.location.assign(`/users/${creator.username}`)
                        }
                        key={index}
                      >
                        {creator.username}
                      </div>
                    ))
                  ) : (
                    <div>{userNameFromPathName()}</div>
                  )}
                </div>
              ),
              description: (
                <div>{post.caption ? post.caption : "no description"}</div>
              ),
            },
          ])
        )
      : "";
  }
  useEffect(() => {
    defineUrls();
    console.log(posts);
  }, [posts]);

  const gallery = posts
    ? posts.map((post: any, index: any) => {
        return (
          <div className="rounded-md relative" key={index}>
            <Image
              onClick={() => setIndex(index)}
              className="rounded-md hover:cursor-pointer"
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
        <div className="w-full pt-80 flex justify-center">
          <CircularProgress />
        </div>
      )}
    </>
  );
}
