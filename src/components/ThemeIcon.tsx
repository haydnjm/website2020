import React, { useContext } from "react";
import { Box } from "rebass";
import { MdInvertColors } from "react-icons/md";
import { ThemeContext } from "../theme/ThemeContext";
import Icon from "../theme/symbols/Icon";

const ThemeIcon: React.FC = () => {
  const [, , nextTheme] = useContext(ThemeContext);
  return (
    <Box sx={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}>
      <Icon
        icon={MdInvertColors}
        iconProps={{ fontSize: "1.5rem" }}
        onClick={nextTheme}
      />
    </Box>
  );
};

export default ThemeIcon;
