import React from "react";
import SignOutBtn from "../../../../../components/common/SignOutBtn";
import UserGallery from "../../../../../components/pages/user/UserGallery";

interface UserProps {
  params: {
    user: string;
  };
}

export default function User({ params }: UserProps) {
  return (
    <div className="mt-[var(--h-navbar)] ">
      <h1>User: {params.user}</h1>
      <UserGallery />
    </div>
  );
}
