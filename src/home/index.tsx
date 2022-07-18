import React, { useEffect } from "react";
import About from "../about";
import Work from "../work";
import Hero from "../hero";
import Blog from "../blog";
import { Box } from "rebass";
import Projects from "../projects";

interface HomeProps {}

const Spacer = () => <Box height={"45vh"} />;

const Home: React.FC<HomeProps> = () => {
  const scrollTo = window?.location?.hash;
  useEffect(() => {
    if (scrollTo) {
      const elem = document.getElementById(scrollTo);
      console.log(elem);
      if (elem) {
        console.log("scrolling to " + elem.offsetTop);
        window.scrollTo({ top: elem.offsetTop - 40 });
      }
    }
  }, [scrollTo]);

  return (
    <>
      <Hero />
      <Spacer />
      <About />
      <Spacer />
      <Work />
      <Spacer />
      <Projects />
      <Spacer />
      <Blog />
    </>
  );
};

export default Home;
