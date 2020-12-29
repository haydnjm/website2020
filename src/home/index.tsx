import React from "react";
import About from "../about";
import Work from "../work";
import Hero from "../hero";
import Blog from "../blog";
import { Box } from "rebass";

interface HomeProps {}

const Spacer = () => <Box height={"45vh"} />;

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <Spacer />
      <About />
      <Spacer />
      <Work />
      <Spacer />
      <Blog />
    </>
  );
};

export default Home;
