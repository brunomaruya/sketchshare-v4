import React from "react";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
    <div className="relative ">
      <Image
        className="h-[700px] w-full object-contain"
        width={500}
        height={500}
        alt=""
        src={src}
      />
      <div
        className="absolute top-[350px] hover:cursor-pointer"
        onClick={goToPrevPost}
      >
        <ChevronLeftIcon className="h-10" />
      </div>
      <div
        className="absolute top-[350px] right-0 hover:cursor-pointer"
        onClick={goToNextPost}
      >
        <ChevronRightIcon className="h-10" />
      </div>
    </div>
  );
}
