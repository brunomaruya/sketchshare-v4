import React, { useContext, useEffect } from "react";
import { navLinks } from "../../../consts/navLinks";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import Link from "next/link";
import { UserContext } from "../../../context/UserContext";
import UserBtn from "../../custom/UserBtn";
import { UserSearcher } from "../../common/UserSearcher";

import PostBtn from "../../common/PostBtn";

export default function NavLinks() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="flex gap-3 items-center ">
      {navLinks.map((navLink) => {
        return (
          <div className="flex items-center gap-3" key={navLink.name}>
            <Link
              href={navLink.path}
              className="size-icon hover:cursor-pointer"
            >
              {navLink.icon}
            </Link>
          </div>
        );
      })}
      <PostBtn />

      <UserSearcher />

      <button className="flex items-center gap-3">
        {currentUser ? (
          <UserBtn />
        ) : (
          <Link href="/sign-in" className="btn ">
            Sign in
          </Link>
        )}
      </button>
    </div>
  );
}
