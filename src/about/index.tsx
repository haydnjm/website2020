import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import Container from "../components/Container";

const About: React.FC = () => {
  return (
    <Container>
      <Flex justifyContent="center" flexDirection="column">
        <Box>
          <Heading fontSize={[1, 2, 3]}>
            I'm Haydn Morris, a software engineer from the UK.
          </Heading>
        </Box>
        <Box>
          <Text fontSize={[1]} py={3}>
            I'm currently living in the Netherlands, and have been for around{" "}
            {new Date().getFullYear() - 2019} years. Creating solutions to
            problems is what I enjoy doing. I've found that building high
            quality software is a good way to do that.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
