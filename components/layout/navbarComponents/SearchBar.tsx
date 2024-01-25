"use client";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { SearchBarContext } from "../../../context/SearchBarContext";

export default function SearchBar() {
  const { setIsSearchBarOpen } = useContext(SearchBarContext);
  return (
    <div className="flex w-full items-center gap-2 ">
      <ArrowLeftIcon
        className="h-5 w-5 md:hidden"
        onClick={() => setIsSearchBarOpen((prev) => !prev)}
      />
      <div className="flex items-center w-full  rounded-md  bg-inputBg px-3  ">
        <MagnifyingGlassIcon className="h-5 w-5" />
        <input
          type="text"
          className="input bg-transparent "
          placeholder="Search..."
        />
      </div>
      <MicrophoneIcon className="h-5 w-5 md:hidden" />
    </div>
  );
}
