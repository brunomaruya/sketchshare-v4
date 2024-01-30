import React from "react";
import CarouselComp from "../../custom/CarouselComp";

export default function PostCarousel({ position, posts }: any) {
  return (
    <div>
      <CarouselComp index={position} posts={posts} />
    </div>
  );
}
