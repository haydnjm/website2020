import React from "react";
import { Box, SxStyleProp, Card } from "rebass";
import { containers, Size } from "./utils";

type Props = {
  sx?: SxStyleProp;
  variant?: string;
  size?: Size;
};

const Container: React.FC<Props> = ({ children, size = "m", sx, ...rest }) => {
  return (
    <Box
      {...rest}
      sx={{
        margin: "auto",
        p: 3,
        width: "100%",
        maxWidth: containers[size],
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export const CardContainer: React.FC<Props> = ({
  children,
  size = "m",
  sx,
  ...rest
}) => {
  return (
    <Card
      {...rest}
      sx={{
        margin: "auto",
        p: 3,
        width: "100%",
        maxWidth: containers[size],
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};

export default Container;
