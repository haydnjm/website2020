import React, { useContext, useEffect, useState } from "react";
import { Box } from "rebass";
import { MdHome } from "react-icons/md";
import Icon from "../theme/symbols/Icon";
import Transitioner from "./Transitioner";
import { Link } from "react-router-dom";
import { TransitionTimes } from "../theme";

const HomeIcon: React.FC = () => {
  const [showHome, setShowHome] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowHome(true), TransitionTimes.FAST);
  }, []);
  return (
    <Box sx={{ position: "fixed", top: "10px", left: "10px", zIndex: 1000 }}>
      <Link to="/">
        <Transitioner show={showHome}>
          <Icon icon={MdHome} iconProps={{ fontSize: "1.5rem" }} />
        </Transitioner>
      </Link>
    </Box>
  );
};

export default HomeIcon;
