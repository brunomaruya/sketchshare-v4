import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

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
  useEffect(() => {
    createUrlsArray();
  }, [posts]);

  const inline = {
    style: {
      width: "100%",
      maxWidth: "900px",
      aspectRatio: "3 / 2",
      margin: "0 auto",
    },
  };
  const [open, setOpen] = React.useState(false);
  const [index2, setIndex2] = React.useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex2(current);

  return (
    <div>
      {index > -1 ? (
        <>
          <Lightbox
            index={index}
            slides={urls}
            plugins={[Inline, Captions]}
            on={{
              view: updateIndex,
              click: toggleOpen(true),
            }}
            carousel={{
              padding: 0,
              spacing: 0,
              imageFit: "cover",
            }}
            inline={{
              style: {
                width: "100%",
                maxWidth: "900px",
                aspectRatio: "3 / 2",
                margin: "0 auto",
              },
            }}
          />
          <Lightbox
            open={open}
            close={toggleOpen(false)}
            index={index2}
            slides={urls}
            on={{ view: updateIndex }}
            animation={{ fade: 0 }}
            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
