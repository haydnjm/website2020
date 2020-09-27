import React from "react";
import { Flex, Box, Image, Heading, Button } from "rebass";
import Link from "../components/Link";
import Container from "../components/Container";

interface DrawingsProps {}

// const imgs = [
//   {
//     img: "/imgs/shef.jpg",
//     title: "Sheffield",
//   },
//   {
//     img: "/imgs/ij.jpg",
//     title: "Brouwerij 't Ij",
//   },
//   {
//     img: "/imgs/garden.jpg",
//     title: "The Cow Next Door",
//   },
// ];

const Drawing: React.FC<{
  title: string;
  img: string;
  description: string[];
}> = ({ title, img, description }) => {
  return (
    <Flex my="150px">
      <Box width={[1 / 2]}>
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
      <Box width={[1 / 2]}>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Box>
            <Heading>{title}</Heading>
            {description.map((d) => (
              <p>{d}</p>
            ))}
          </Box>
          <Box m={-1}>
            <Button m={1}>Buy A4</Button>
            <Button m={1}>Buy A3</Button>
            <Button m={1}>Buy PDF</Button>
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
  "This is the only one in a windmill though.",
];

const gardenDescription = [
  "In the English countryside there's a field.",
  "In a field there's a cow.",
  "Sometimes the cow stares at me over the garden hedge.",
];

const Drawings: React.FC<DrawingsProps> = () => {
  return (
    <>
      <Container size="l">
        <Box pt={100}>
          <Heading>This is the heading</Heading>
          <Heading>I'm not sure what to put here yet.</Heading>
          <Heading>I think I'd like to have it over three lines</Heading>
          <p>
            All proceeds from art sales go to{" "}
            <Link to="https://snowdropproject.co.uk/" external newTab>
              Snowdrop project
            </Link>
          </p>
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
