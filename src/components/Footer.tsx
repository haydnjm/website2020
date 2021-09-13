import React from "react";
import { Flex, Text } from "rebass";
import Socials from "./Socials";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Flex
      alignItems="center"
      py={"150px"}
      fontSize={[1]}
      flexDirection="column"
    >
      <Text my={1}>Haydn Morris, {new Date().getFullYear()}</Text>
      <Socials />
    </Flex>
  );
};

export default Footer;
