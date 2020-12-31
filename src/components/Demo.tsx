import React, { useContext } from "react";
import { Box, Heading, Button, Text } from "rebass";
import { ThemeContext } from "../theme/ThemeContext";

const Demo: React.FC = () => {
  const [, setTheme] = useContext(ThemeContext);

  return (
    <Box
      sx={{
        m: 0,
        p: 4,
        color: "text",
        bg: "background",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
      }}
    >
      <Heading variant="display">Hello</Heading>
      <Text mb={4}>This is a demo using presets from Theme UI</Text>
      <Button mr={3} onClick={() => setTheme("light")}>
        Light theme
      </Button>
      <Button onClick={() => setTheme("dark")} variant="secondary">
        Dark theme
      </Button>
    </Box>
  );
};

export default Demo;
