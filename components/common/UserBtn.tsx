import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Link from "next/link";

export default function UserBtn() {
  const { currentUser } = useContext(UserContext);
  return (
    <button
      onClick={() => window.location.assign(`/users/${currentUser.name}`)}
    >
      {currentUser.name}
    </button>
  );
}
