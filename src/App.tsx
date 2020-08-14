import React, { useContext } from "react";
import { ThemeProvider } from "emotion-theming";
import themer from "./theme";
import ThemeContextProvider, { ThemeContext } from "./theme/ThemeContext";
import { Box } from "rebass";
import Routes from "./Routes";

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
