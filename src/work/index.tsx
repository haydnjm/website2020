import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Box, Flex, Heading } from "rebass";
import Container from "../components/Container";
import Icon from "../theme/symbols/Icon";
import Blocks from "./Blocks";

export type Block = {
  title: string;
  colour: string;
  country?: string;
  image?: string;
};

const tools: Block[] = [
  { title: "Apollo", colour: "purple", image: "apollo.png" },
  { title: "AWS", colour: "yellow", image: "aws.png" },
  { title: "GCP", colour: "blue", image: "gcp.png" },
  { title: "Go", colour: "blue", image: "go.png" },
  { title: "GraphQL", colour: "pink", image: "graphql.png" },
  { title: "GRPC", colour: "gray", image: "grpc.png" },
  { title: "Illustrator", colour: "yellow", image: "illustrator.png" },
  { title: "Javascript", colour: "yellow", image: "javascript.png" },
  { title: "jQuery", colour: "blue", image: "jquery.png" },
  { title: "Lambda", colour: "red", image: "lambda.png" },
  { title: "Kotlin", colour: "red", image: "kotlin.png" },
  { title: "Laravel", colour: "red", image: "laravel.png" },
  { title: "MongoDB", colour: "green", image: "mongo.png" },
  { title: "MySQL", colour: "blue", image: "mysql.png" },
  { title: "Node", colour: "green", image: "node.png" },
  { title: "Photoshop", colour: "blue", image: "photoshop.png" },
  { title: "PHP", colour: "red", image: "php.png" },
  { title: "React", colour: "cyan", image: "react.png" },
  { title: "Redux", colour: "purple", image: "redux.png" },
  { title: "S3", colour: "yellow", image: "s3.png" },
  { title: "Swift", colour: "purple", image: "swift.png" },
  { title: "Typescript", colour: "blue", image: "typescript.png" },
];

const project: Block[] = [
  { title: "Agile/Scrum", colour: "red" },
  { title: "Jira", colour: "red", image: "jira.svg" },
  { title: "ClickUp", colour: "red", image: "clickup.png" },
];

const companies: Block[] = [
  {
    title: "Landis+Gyr",
    colour: "transparent",
    country: "Manchtester, UK",
    image: "landis.jpeg",
  },
  {
    title: "ExternPro",
    colour: "transparent",
    country: "Alcañiz, SP",
    image: "externpro.png",
  },
  {
    title: "AvioRace",
    colour: "transparent",
    country: "Modena, IT",
    image: "avio.jpg",
  },
  {
    title: "Intique",
    colour: "transparent",
    country: "Manchester, UK",
    image: "intique.png",
  },
  {
    title: "Damflask Consulting",
    colour: "transparent",
    country: "Sheffield, UK",
    image: "damflask.png",
  },
  {
    title: "De Energiebespaarders",
    colour: "transparent",
    country: "Amsterdam, NL",
    image: "deb.png",
  },
];

const WorkBlocks: React.FC<{
  title: string;
  progress?: number;
  blocks: Block[];
  width: number;
}> = ({ title, blocks, width }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Box my={3}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        onClick={() => setVisible(!visible)}
        sx={{ cursor: "pointer" }}
        my={2}
      >
        <Box>
          <Heading fontSize={[6]}>{title}</Heading>
        </Box>
        <Box>
          <Icon
            icon={BsChevronCompactDown}
            iconProps={{ size: "3rem" }}
            boxProps={{
              display: "block",
              transform: `rotate(${visible ? "180deg" : "0deg"})`,
              transition: "0.5s",
            }}
          />
        </Box>
      </Flex>
      {visible ? <Blocks blocks={blocks} width={width} /> : <></>}
    </Box>
  );
};

const Work: React.FC = () => {
  return (
    <Container>
      <WorkBlocks title="Software Engineer" blocks={tools} width={4} />
      <WorkBlocks title="Project Manager" blocks={project} width={3} />
      <WorkBlocks title="Who I've worked with" blocks={companies} width={2} />
    </Container>
  );
};

export default Work;
