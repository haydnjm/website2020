import React, { useCallback } from "react";
import { SxStyleProp } from "rebass";
import { Link as RouterLink } from "react-router-dom";
import { Link as RebassLink } from "rebass";

interface StyledLinkProps {
  sx?: SxStyleProp;
  to: string;
  newTab?: boolean;
  external?: boolean;
}

const StyledLink: React.FC<StyledLinkProps> = ({
  sx,
  newTab,
  external,
  ...props
}) => {
  const openExternal = useCallback(() => {
    window.open(props.to, external ? "_blank" : undefined);
  }, [external, props.to]);

  return (
    <RebassLink
      target={newTab ? "_blank" : undefined}
      as={RouterLink}
      onClick={() => external && openExternal()}
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
