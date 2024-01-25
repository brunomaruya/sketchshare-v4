"use client";
import {
  ArrowLeftOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import React, { useContext } from "react";
import UserBtn from "../../custom/UserBtn";
import { UserContext } from "../../../context/UserContext";
import Link from "next/link";
import { UserSearcher } from "../../common/UserSearcher";
import PostBtn from "../../common/PostBtn";
import ThemeSwitcher from "../../common/ThemeSwitcher";

export default function MobileNav() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="mobile-nav">
      <ul className="flex flex-bc">
        <li>
          <ThemeSwitcher />
        </li>

        <li>
          <UserIcon className="size-icon" />
        </li>

        <li>
          <PostBtn />
        </li>

        <li>
          <UserSearcher />
        </li>

        <li>
          <button className="flex items-center gap-3">
            {currentUser ? (
              <UserBtn />
            ) : (
              <Link href="/sign-in">
                <ArrowLeftOnRectangleIcon className="size-icon" />
              </Link>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}
