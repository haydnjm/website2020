import React from "react";
import { Flex, Text } from "rebass";
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Flex justifyContent="center" py={"100px"} fontSize={[1]}>
      <Text>Haydn Morris, {new Date().getFullYear()}</Text>
    </Flex>
  );
};

export default Footer;
