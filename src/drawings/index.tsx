import React from "react";
import { Flex, Box, Image, Heading } from "rebass";
import Container from "../components/Container";

interface DrawingsProps {}

const Drawing: React.FC<{
  title: string;
  img: string;
  description: string[];
}> = ({ title, img, description }) => {
  return (
    <Flex my="150px" flexWrap="wrap">
      <Box width={[1, 1, 1 / 2]} mb={[50, 50, 0]}>
        <Image
          src={img}
          sx={{
            border: "3px solid #444",
            boxShadow: "0 10px 50px -20px #000066",
            display: "block",
            width: "300px",
            margin: "auto",
          }}
        />
      </Box>
      <Box width={[1, 1, 1 / 2]}>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Box>
            <Heading>{title}</Heading>
            {description.map((d) => (
              <p key={d}>{d}</p>
            ))}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

const sheffDesc = [
  "Seven hills, two football teams, great beer and better people.",
];

const hetIjDesc = [
  "Amsterdam is home to many breweries, each with its own unique personality.",
  "This is the only one I know of in a windmill though.",
];

const gardenDescription = [
  "In the English countryside there's a field.",
  "In a field there's a cow.",
  "Sometimes the cow used to stare at me over the garden hedge.",
];

const Drawings: React.FC<DrawingsProps> = () => {
  return (
    <>
      <Container size="l">
        <Box pt={100}>
          <Heading fontSize={5}>Some doodles of places that I've lived</Heading>
        </Box>
        <Drawing
          img="/imgs/shef.jpg"
          title="Sheffield"
          description={sheffDesc}
        />
        <Drawing
          img="/imgs/ij.jpg"
          title="Brouwerij 't Ij"
          description={hetIjDesc}
        />
        <Drawing
          img="/imgs/garden.jpg"
          title="The Cow Next Door"
          description={gardenDescription}
        />
      </Container>
    </>
  );
};

export default Drawings;
