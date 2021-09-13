import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Flex } from "rebass";
import Icon from "../theme/symbols/Icon";
import Link from "./Link";

interface NameProps {}

const Name: React.FC<NameProps> = () => {
  return (
    <Flex my={1} fontSize={4}>
      <Link to="https://github.com/haydnjm" external={true} newTab={true}>
        <Icon icon={FaGithub} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/haydn-morris-18b1b3a5/"
        external={true}
        newTab={true}
      >
        <Icon icon={FaLinkedin} />
      </Link>
      <Link to="https://haydnjmorris.medium.com/" external={true} newTab={true}>
        <Icon icon={FaMedium} />
      </Link>
    </Flex>
  );
};

export default Name;
