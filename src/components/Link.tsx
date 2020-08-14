import React from "react";
import { SxStyleProp } from "rebass";
import { Link as RouterLink } from "react-router-dom";
import { Link as RebassLink } from "rebass";

interface StyledLinkProps {
  sx?: SxStyleProp;
  to: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ sx, ...props }) => {
  return (
    <RebassLink
      as={RouterLink}
      sx={{
        color: "green",
        textDecorationColor: "green",
        ":link": {
          color: "green",
        },
        ":visited": "green",
        ...sx,
      }}
      {...props}
    ></RebassLink>
  );
};

export default StyledLink;
