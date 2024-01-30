import React, { createContext, useState } from "react";

export const SelectImageContext = createContext({} as any);

export default function SelectedImageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imageIndex, setImageIndex] = useState(-1);
  return (
    <SelectImageContext.Provider value={{ imageIndex, setImageIndex }}>
      {children}
    </SelectImageContext.Provider>
  );
}
