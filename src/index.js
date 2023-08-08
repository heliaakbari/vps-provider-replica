import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Initializer from "./initializer";
import {
  Button,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
  CssBaseline,
  Select,
} from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    background: {
      default: "rgba(241, 249, 254, 1)",
    },
    text: {
      primary: "#2F3857",
      disabled: "rgba(0, 0, 0, 0.26)",
      hint: "#ffffff",
    },
    divider: "#E0E0E0",
    primary: {
      main: "rgba(44, 94, 255, 1)",
    },
    secondary: {
      main: "rgba(44, 94, 255, 1)",
    },
    success: {
      main: "rgba(0, 205, 130, 1)",
    },
  },
  typography: {
    fontWeightRegular: 500,
    fontSize: "14px",
    fontFamily: "Roboto",
    h7: {
      fontWeightRegular: 400,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 1,
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "20px",
          color: "rgba(47, 56, 87, 1)",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: 4,
        },
      },
    },
  },
  
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <Initializer />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
