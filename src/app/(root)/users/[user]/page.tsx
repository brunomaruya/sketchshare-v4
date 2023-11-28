import React from "react";

interface ProductProps {
  params: {
    user: string;
  };
}

export default function User({ params }: ProductProps) {
  return <div className="mt-[var(--h-navbar)]">User: {params.user}</div>;
}
