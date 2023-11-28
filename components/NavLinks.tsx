import React, { useContext } from "react";
import { navLinks } from "../consts/navLinks";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { UserContext } from "../context/UserProvider";
import UserBtn from "./common/UserBtn";

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
      <ThemeSwitcher />
      <button className="flex items-center gap-3">
        {currentUser ? (
          <UserBtn />
        ) : (
          <Link href="/sign-up" className="btn ">
            Sign up
          </Link>
        )}
      </button>
    </div>
  );
}
