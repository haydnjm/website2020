import React, { useContext, useEffect, useState } from "react";
import { Box } from "rebass";
import { MdInvertColors } from "react-icons/md";
import { ThemeContext } from "../theme/ThemeContext";
import Icon from "../theme/symbols/Icon";
import Transitioner from "./Transitioner";

const ThemeIcon: React.FC = () => {
  const [, , nextTheme] = useContext(ThemeContext);
  const [showTheme, setShowTheme] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTheme(true), 1500);
  }, []);
  return (
    <Box sx={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}>
      <Transitioner show={showTheme}>
        <Icon
          icon={MdInvertColors}
          iconProps={{ fontSize: "1.5rem" }}
          onClick={nextTheme}
        />
      </Transitioner>
    </Box>
  );
};

export default ThemeIcon;
