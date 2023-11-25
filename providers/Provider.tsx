"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import SearchBarProvider from "../context/SearchBarContext";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <SearchBarProvider>{children}</SearchBarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
