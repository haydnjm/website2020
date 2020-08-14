import React from "react";
import ThemeIcon from "../components/ThemeIcon";
import About from "../about";
import Work from "../work";
import Drawings from "../drawings";
import Hero from "../hero";
import { Flex, Text } from "rebass";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <ThemeIcon />
      <Hero />
      <About />
      <Work />
      <Drawings />
      <Flex justifyContent="center" py={"20px"} fontSize={[1]}>
        <Text>Haydn Morris, {new Date().getFullYear()}</Text>
      </Flex>
    </>
  );
};

export default Home;
