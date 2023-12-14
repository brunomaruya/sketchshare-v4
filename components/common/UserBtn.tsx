import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

export default function UserBtn() {
  const { currentUser } = useContext(UserContext);
  return (
    <div onClick={() => window.location.assign(`/users/${currentUser.name}`)}>
      {/* {currentUser.name} */}
      <UserIcon className="size-icon" />
    </div>
  );
}
