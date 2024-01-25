import React, { useContext, useEffect } from "react";
import { navLinks } from "../../../consts/navLinks";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import Link from "next/link";
import { UserContext } from "../../../context/UserContext";
import UserBtn from "../../common/UserBtn";
import { UserSearcher } from "../../common/UserSearcher";

import PostBtn from "../../common/PostBtn";

export default function NavLinks() {
  const { currentUser, init } = useContext(UserContext);

  const initInNav = async () => {
    try {
      init();
    } catch (err) {
      console.log("init falhou: " + err);
    }
  };

  useEffect(() => {
    initInNav();
  }, []);
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

      <ThemeSwitcher />

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
