import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

declare module "@mui/material/styles" {
  interface Palette {
    danger: Palette["primary"];
  }
  interface PaletteOptions {
    danger?: PaletteOptions["primary"];
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    danger: true;
  }
}

export const defaultTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#8b5cf6",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#9ca3af",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    success: {
      main: "#22c55e",
      contrastText: "#fff",
    },
    info: {
      main: "#06b6d4",
      contrastText: "#fff",
    },
    warning: {
      main: "#f97316",
      contrastText: "#fff",
    },
    danger: {
      main: "#ef4444",
      contrastText: "#fff",
    },
    background: {
      default: "#eef2f6",
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#000",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          fontWeight: 500,
          hover: {
            boxShadow: "none",
          }
        
        },
      },
  
      defaultProps: {
        color: "primary",
        variant: "contained",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
       
      },
    },
  },
});
