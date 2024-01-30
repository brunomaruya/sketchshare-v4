import React from "react";
import PostTemplate from "../../../../../components/pages/post/PostTemplate";

interface PostProps {
  params: {
    post: string;
  };
}

export default function page({ params }: PostProps) {
  return (
    <div className="">
      <PostTemplate />
    </div>
  );
}
