"use client";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import SearchBarProvider from "../context/SearchBarContext";
import UserProvider from "../context/UserContext";
import { NextUIProvider } from "@nextui-org/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import SelectedImageProvider from "../context/SelectedImageContext";
import PostsProvider from "../context/PostsContext";

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
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <PostsProvider>
              <SelectedImageProvider>
                <SearchBarProvider>{children}</SearchBarProvider>
              </SelectedImageProvider>
            </PostsProvider>
          </UserProvider>
        </QueryClientProvider>
      </NextUIProvider>
    </ThemeProvider>
  );
}
