import React from "react";

interface PostProps {
  params: {
    post: string;
  };
}

export default function page({ params }: PostProps) {
  return <div className="mt-52">{params.post}</div>;
}
