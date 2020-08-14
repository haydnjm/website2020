import React, { useState, useEffect } from "react";
import { Box, Heading, Flex } from "rebass";
import Container from "../components/Container";
import Transitioner from "../components/Transitioner";
import Icon from "../theme/symbols/Icon";
import { BsChevronCompactDown } from "react-icons/bs";

const Hero: React.FC = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 500);
    setTimeout(() => setShowArrow(true), 1000);
  }, []);

  return (
    <Box>
      <Container size="m" sx={{ height: "100vh" }}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          sx={{ textAlign: "center" }}
          flexDirection="column"
        >
          <Box height="10vh" />
          <Box>
            <Transitioner show={showTitle}>
              <Heading fontSize={[4]}>Haydn Morris</Heading>
            </Transitioner>
          </Box>

          <Box height="10vh">
            <Transitioner show={showArrow}>
              <Icon icon={BsChevronCompactDown} iconProps={{ size: "3rem" }} />
            </Transitioner>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
