import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

export default function CarouselComp({
  posts,
  index,
}: {
  posts: any;
  index: number;
}) {
  const [urls, setUrls] = useState<any>([]);

  async function createUrlsArray() {
    (await posts)
      ? posts.map((post: any) =>
          setUrls((oldUrls: any) => [
            ...oldUrls,
            {
              src: post.imageUrl,
              title: "slide",
              description: "description",
            },
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

  return (
    <div>
      {index > -1 ? (
        <Lightbox
          index={index}
          slides={urls}
          inline={inline}
          plugins={[Inline]}
        />
      ) : (
        ""
      )}
    </div>
  );
}
