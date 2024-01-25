"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { dark } from "@mui/material/styles/createPalette";

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
    <div onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
      <Select label="Theme">
        <SelectItem key={"dark"} value={"dark"}>
          Dark
        </SelectItem>
        <SelectItem key={"dark"} value={"dark"}>
          Light
        </SelectItem>
      </Select>
    </div>
  );
}
