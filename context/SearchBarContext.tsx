"use client";
import React, { createContext, useState } from "react";

type SearchBarContextType = {
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchBarContext = createContext({} as SearchBarContextType);

export default function SearchBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const values = {
    isSearchBarOpen,
    setIsSearchBarOpen,
  };
  return (
    <SearchBarContext.Provider value={values}>
      {children}
    </SearchBarContext.Provider>
  );
}
