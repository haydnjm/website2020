import React, { useMemo } from "react";
import { Heading, Box, Flex, Text } from "rebass";
import Container from "../components/Container";

const About: React.FC = () => {
  const age = useMemo(() => {
    const date = new Date();
    const year = date.getFullYear();
    const dayOfMonth = date.getUTCMonth();
    const afterBirthday = dayOfMonth >= 20 || date.getMonth() > 0;
    return year - 1994 + (afterBirthday ? 0 : -1);
  }, []);

  return (
    <Container>
      <Flex justifyContent="center" flexDirection="column">
        <Box>
          <Heading fontSize={[1, 2, 3]}>
            I'm Haydn Morris, I'm a {age} year old software engineer from the
            UK.
          </Heading>
        </Box>
        <Box>
          <Text fontSize={[1]} py={3}>
            I'm currently living in Amsterdam, NL, and have been for around{" "}
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
