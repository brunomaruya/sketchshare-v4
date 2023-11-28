"use client";
import React, { useContext } from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { SearchBarContext } from "../context/SearchBarContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserContext } from "../context/UserProvider";
import { getUser } from "@/lib/appwrite/api";

export default function Navbar() {
  const { isSearchBarOpen, setIsSearchBarOpen } = useContext(SearchBarContext);
  const { currentUser } = useContext(UserContext);

  return (
    <header className="header">
      <h1>aqui</h1>
      <h1>{currentUser ? currentUser.name : "erro"}</h1>
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
