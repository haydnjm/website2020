import React, { useContext } from "react";
import { ThemeProvider } from "emotion-theming";
import themer from "./theme";
import ThemeContextProvider, { ThemeContext } from "./theme/ThemeContext";
import { Box } from "rebass";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import Toaster from "./theme/symbols/Toaster/Toaster";
import TopNav from "./components/TopNav";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";

function AppWithThemeAndRoutes() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

function App() {
  const [theme] = useContext(ThemeContext);

  return (
    <ThemeProvider theme={() => themer(theme)}>
      <Toaster />
      <TopNav />
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
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default AppWithThemeAndRoutes;
