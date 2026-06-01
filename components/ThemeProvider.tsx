"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// We use React.ComponentProps to automatically extract the correct types 
// from NextThemesProvider, entirely avoiding the broken 'dist/types' path!
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}