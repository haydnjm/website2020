import React from "react";
import About from "../about";
import Work from "../work";
import Hero from "../hero";
import { Flex, Text } from "rebass";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Flex justifyContent="center" py={"20px"} fontSize={[1]}>
        <Text>Haydn Morris, {new Date().getFullYear()}</Text>
      </Flex>
    </>
  );
};

export default Home;
