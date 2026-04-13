"use client";

import { createContext, useContext, ReactNode } from "react";

type Theme = "light";

const ThemeContext = createContext<{ theme: Theme }>({ theme: "light" });

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
