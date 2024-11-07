"use client"

import { defaultTheme } from "@/lib/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <MuiThemeProvider theme={defaultTheme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
