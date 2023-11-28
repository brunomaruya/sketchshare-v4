"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import SearchBarProvider from "../context/SearchBarContext";
import UserProvider from "../context/UserProvider";
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
        <UserProvider>
          <SearchBarProvider>{children}</SearchBarProvider>
        </UserProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
