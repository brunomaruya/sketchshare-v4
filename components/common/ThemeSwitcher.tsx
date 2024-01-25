"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Select, SelectSection, SelectItem, Switch } from "@nextui-org/react";
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
    <div>
      <Switch
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        defaultSelected
        size="lg"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      ></Switch>
    </div>
  );
}
