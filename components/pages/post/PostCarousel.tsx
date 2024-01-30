import React from "react";

import Image from "next/image";

export default function PostCarousel({
  src,
  nextPostId,
}: {
  src: any;
  nextPostID: any;
}) {
  return (
    <div>
      <Image width={500} height={500} alt="" src={src} />
    </div>
  );
}
