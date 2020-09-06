import React from "react";
import About from "../about";
import Work from "../work";
import Hero from "../hero";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
    </>
  );
};

export default Home;
