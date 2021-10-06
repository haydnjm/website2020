import React, { useContext, useEffect, useState } from "react";
import { Box, Flex } from "rebass";
import { MdHome, MdInvertColors } from "react-icons/md";
import { FaDatabase, FaPaintBrush } from "react-icons/fa";
import { ThemeContext } from "../theme/ThemeContext";
import Icon from "../theme/symbols/Icon";
import Transitioner from "./Transitioner";
import { TransitionTimes } from "../theme";
import Link from "./Link";
import Socials from "./Socials";
import { useLocation } from "react-router";

const ThemeIcon: React.FC = () => {
  const [, , nextTheme] = useContext(ThemeContext);
  const [showTheme, setShowTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setShowTheme(true), TransitionTimes.FAST);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "10px",
        right: "10px",
        left: "10px",
        zIndex: 1000,
      }}
    >
      <Transitioner show={showTheme}>
        <Flex justifyContent="space-between">
          <Box>
            {location.pathname !== "/" && (
              <Link to="/">
                <Icon icon={MdHome} iconProps={{ fontSize: "1.5rem" }} />
              </Link>
            )}
            <Link to="/draw">
              <Icon icon={FaPaintBrush} iconProps={{ fontSize: "1.5rem" }} />
            </Link>
            <Link to="/mongo-cheatsheet">
              <Icon icon={FaDatabase} iconProps={{ fontSize: "1.5rem" }} />
            </Link>
            <Icon
              icon={MdInvertColors}
              iconProps={{ fontSize: "1.5rem" }}
              onClick={nextTheme}
            />
          </Box>
          <Box>
            <Socials />
          </Box>
        </Flex>
      </Transitioner>
    </Box>
  );
};

export default ThemeIcon;
