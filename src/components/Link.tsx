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
        color: "link",
        textDecorationColor: "link",
        ":link": {
          color: "link",
        },
        ":visited": "visited",
        ...sx,
      }}
      {...props}
    ></RebassLink>
  );
};

export default StyledLink;
