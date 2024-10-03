import React from "react";
import { Box, Flex, Heading, Image, Text } from "rebass";
import Container from "../components/Container";
import Link from "../components/Link";

const projects = [
  {
    name: "Mongo cheatsheet",
    colour: "#4DB33D",
    logo: "mongo.png",
    image: "codeblock.png",
    link: "/mongo-cheatsheet",
    text: "A list of commonly used click-to-copy operations to make building aggregation piplines a little quicker and easier",
  },
  {
    name: "Amsterdam house price map",
    colour: "#3a5487",
    logo: "tableau.svg",
    image: "house-prices.png",
    link: "https://ams.haydnjm.com",
    text: "See how house prices have changed over time across Amsterdam, as well as new listings as they come on the market.",
  },
];

type Project = {
  name: string;
  colour: string;
  image: string;
  logo: string;
  link: string;
  text: string;
};

const Project: React.FC<Project> = ({
  name,
  image,
  link,
  colour,
  logo,
  text,
}) => {
  return (
    <Box width={[1, 1, 1, 1 / 2]} p={1}>
      <Box
        sx={{
          boxShadow: "0 3px 6px -3px #00000066",
          transition: "0.1s",
          ":hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        <Link
          external={link[0] !== "/"}
          newTab
          to={link}
          sx={{
            textDecoration: "none",
          }}
        >
          <Box
            backgroundColor={colour}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "3px 3px 0 0",
            }}
          >
            <Box
              p={3}
              sx={{
                position: "relative",
                zIndex: 1,
                color: "white",
              }}
            >
              <Heading lineHeight={1} fontSize={4} mb={2}>
                {name}
              </Heading>
              <Text>{text}</Text>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: "-50px",
                right: "-50px",
                opacity: "0.2",
                zIndex: 0,
              }}
            >
              <Image
                src={`imgs/${logo}`}
                maxHeight={"150px"}
                maxWidth={"150px"}
              />
            </Box>
          </Box>
          <Box
            width="100%"
            height="100px"
            sx={{
              backgroundImage: `url(imgs/${image})`,
              backgroundSize: "cover",
              borderRadius: "0 0 3px 3px",
            }}
          ></Box>
        </Link>
      </Box>
    </Box>
  );
};

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <Container>
      <Heading fontSize={[6]} my={3}>
        Some things I've made
      </Heading>
      <Flex m={-1} flexWrap="wrap">
        {projects.map((project) => (
          <Project {...project} key={project.name} />
        ))}
      </Flex>
    </Container>
  );
};

export default Projects;
