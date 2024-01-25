import React from "react";
import SignOutBtn from "../../../../../components/common/SignOutBtn";
import UserGallery from "../../../../../components/pages/user/UserGallery";

interface ProductProps {
  params: {
    user: string;
  };
}

export default function User({ params }: ProductProps) {
  return (
    <div className="mt-[var(--h-navbar)] ">
      <h1>User: {params.user}</h1>
      <SignOutBtn />
      <UserGallery />
    </div>
  );
}
