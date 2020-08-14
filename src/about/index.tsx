import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import Container from "../components/Container";
import Link from "../components/Link";

const About: React.FC = () => {
  return (
    <Container>
      <Flex height="70vh" justifyContent="center" flexDirection="column">
        <Box>
          <Heading fontSize={[1, 2, 3]}>
            I'm Haydn Morris. I build software. Sometimes{" "}
            <Link to="/blog">I write about it</Link> (or about other things).
            Sometimes <Link to="doodle">I draw</Link>.
          </Heading>
        </Box>
        <Box>
          <Text fontSize={[1]} py={3}>
            I'm from the UK, but I'm currently living in Amsterdam, NL. Creating
            solutions to people's problems is what I like to do. I've found that
            buiding high quality software is a good way to do that.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
