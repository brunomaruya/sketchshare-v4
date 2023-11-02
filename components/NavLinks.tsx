import React from "react";
import { navLinks } from "../consts/navLinks";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="flex gap-3 items-center">
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
    </div>
  );
}
