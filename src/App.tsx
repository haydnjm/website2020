import React, { useContext, useState, useEffect } from "react";
import { ThemeProvider } from "emotion-theming";
import themer from "./theme";
import ThemeContextProvider, { ThemeContext } from "./theme/ThemeContext";
import { Box } from "rebass";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import Toaster from "./theme/symbols/Toaster/Toaster";
import ThemeIcon from "./components/ThemeIcon";

function AppWithTheme() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
}

function App() {
  const [theme] = useContext(ThemeContext);

  return (
    <ThemeProvider theme={() => themer(theme)}>
      <Toaster />
      <ThemeIcon />
      <Box
        sx={{
          fontFamily: "body",
          fontWeight: "body",
          lineHeight: "body",
          backgroundColor: "background",
          color: "text",
        }}
      >
        <Routes />
      </Box>
    </ThemeProvider>
  );
}

export default AppWithTheme;
