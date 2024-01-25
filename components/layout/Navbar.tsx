"use client";
import React, { useContext, useEffect } from "react";
import NavLinks from "./navbarComponents/NavLinks";
import SearchBar from "./navbarComponents/SearchBar";
import Logo from "../common/Logo";
import { SearchBarContext } from "../../context/SearchBarContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserContext } from "../../context/UserContext";
import { createUserDocument, getUser } from "@/lib/appwrite/api";

export default function Navbar() {
  const { isSearchBarOpen, setIsSearchBarOpen } = useContext(SearchBarContext);

  return (
    <header className="header">
      <div className="flex-bc">
        {isSearchBarOpen ? null : (
          <div className="md:hidden">
            <Logo />
          </div>
        )}

        <div className="md:block hidden">
          <Logo />
        </div>

        {isSearchBarOpen ? (
          <div className="w-full md:hidden block">
            <SearchBar />
          </div>
        ) : (
          <MagnifyingGlassIcon
            className="h-5 w-5 md:hidden"
            onClick={() => setIsSearchBarOpen((prev) => !prev)}
          />
        )}

        <div className="w-full hidden md:block mx-10">
          <SearchBar />
        </div>

        <div className="hidden md:block">
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
