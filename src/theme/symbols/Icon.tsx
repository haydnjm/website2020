import React from "react";
import { SxStyleProp, Box } from "rebass";
import { IconType, IconBaseProps } from "react-icons/lib";

type Props = {
  boxProps?: SxStyleProp;
  iconProps?: IconBaseProps;
  icon: IconType;
  onClick?: any;
};

const Icon: React.FC<Props> = ({ icon, boxProps, iconProps, onClick }) => {
  return (
    <Box
      onClick={onClick}
      p={2}
      sx={{
        color: "text",
        display: "inline",
        ...boxProps,
        ...(onClick ? { cursor: "pointer" } : {}),
      }}
    >
      {icon(iconProps || {})}
    </Box>
  );
};

export default Icon;
