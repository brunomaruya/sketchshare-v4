"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import SearchBarProvider from "../context/SearchBarContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider>
      <SearchBarProvider>{children}</SearchBarProvider>
    </ThemeProvider>
  );
}
