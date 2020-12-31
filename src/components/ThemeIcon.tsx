import React, { useContext, useEffect, useState } from "react";
import { Box } from "rebass";
import { MdInvertColors } from "react-icons/md";
import { FaPenNib, FaDatabase, FaPaintBrush } from "react-icons/fa";
import { ThemeContext } from "../theme/ThemeContext";
import Icon from "../theme/symbols/Icon";
import Transitioner from "./Transitioner";
import { TransitionTimes } from "../theme";
import Link from "./Link";

const ThemeIcon: React.FC = () => {
  const [, , nextTheme] = useContext(ThemeContext);
  const [showTheme, setShowTheme] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTheme(true), TransitionTimes.FAST);
  }, []);
  return (
    <Box sx={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}>
      <Transitioner show={showTheme}>
        <Icon
          icon={MdInvertColors}
          iconProps={{ fontSize: "1.5rem" }}
          onClick={nextTheme}
        />
        <Link newTab external to="https://haydnjmorris.medium.com/">
          <Icon icon={FaPenNib} iconProps={{ fontSize: "1.5rem" }} />
        </Link>
        <Link to="/draw">
          <Icon icon={FaPaintBrush} iconProps={{ fontSize: "1.5rem" }} />
        </Link>
        <Link to="/mongo-cheatsheet">
          <Icon icon={FaDatabase} iconProps={{ fontSize: "1.5rem" }} />
        </Link>
      </Transitioner>
    </Box>
  );
};

export default ThemeIcon;