import React, { useCallback } from "react";
import { SxStyleProp } from "rebass";
import { Link as RouterLink } from "react-router-dom";
import { Link as RebassLink } from "rebass";

interface LinkProps {
  sx?: SxStyleProp;
  to: string;
  newTab?: boolean;
  external?: boolean;
}

const Link: React.FC<LinkProps> = ({ sx, newTab, external, ...props }) => {
  const openExternal = useCallback(() => {
    window.open(props.to, external ? "_blank" : undefined);
  }, [external, props.to]);

  return (
    <RebassLink
      target={newTab ? "_blank" : undefined}
      as={!external ? RouterLink : undefined}
      onClick={() => external && openExternal()}
      sx={{
        color: "link",
        textDecorationColor: "link",
        ":link": {
          color: "link",
        },
        ":visited": "visited",
        cursor: "pointer",
        ...sx,
      }}
      {...props}
    ></RebassLink>
  );
};

export default Link;
