import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function PostCarousel({
  src,
  nextPostId,
  prevPostId,
}: {
  src: any;
  nextPostId: any;
  prevPostId: any;
}) {
  const goToNextPost = () => {
    window.location.assign(`/posts/${nextPostId}`);
  };
  const goToPrevPost = () => {
    window.location.assign(`/posts/${prevPostId}`);
  };

  return (
    <div>
      <Image width={500} height={500} alt="" src={src} />
      <div onClick={goToPrevPost}>Prev</div>
      <div onClick={goToNextPost}>Next</div>
    </div>
  );
}
