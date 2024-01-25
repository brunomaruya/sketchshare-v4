"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className="size-icon hover:cursor-pointer"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}
