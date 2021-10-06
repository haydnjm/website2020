import React, { ReactNode, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Box, Flex, Heading } from "rebass";
import Container from "../components/Container";
import Icon from "../theme/symbols/Icon";
import Blocks from "./Blocks";

export type WorkBlock = {
  title: string;
  country?: string;
  image?: string;
};

export type Divider = {
  dividerText: string;
  icon?: ReactNode;
};

export type Block = WorkBlock | Divider;

const tools: Block[] = [
  { dividerText: "Development" },
  { title: "Apollo", image: "apollo.png" },
  { title: "Compose", image: "jetpack.png" },
  { title: "Go", image: "go.png" },
  { title: "GraphQL", image: "graphql.png" },
  { title: "GRPC", image: "grpc.png" },
  { title: "Javascript", image: "javascript.png" },
  { title: "jQuery", image: "jquery.png" },
  { title: "KMM", image: "kmm.png" },
  { title: "Kotlin", image: "kotlin.png" },
  { title: "Laravel", image: "laravel.png" },
  { title: "Next.js", image: "next_logo.png" },
  { title: "Node", image: "node.png" },
  { title: "PHP", image: "php.png" },
  { title: "React", image: "react.png" },
  { title: "Redux", image: "redux.png" },
  { title: "Swift", image: "swift.png" },
  { title: "SwiftUI", image: "swiftui.png" },
  { title: "Typescript", image: "typescript.png" },
  { dividerText: "Data" },
  { title: "MongoDB", image: "mongo.png" },
  { title: "MySQL", image: "mysql.png" },
  { title: "Postgres", image: "postgres.png" },
  { title: "Tableau", image: "tableau.svg" },
  { dividerText: "Infrastructure" },
  { title: "AWS", image: "aws.png" },
  { title: "Docker", image: "docker.png" },
  { title: "GCP", image: "gcp.png" },
  { dividerText: "Design" },
  { title: "Figma", image: "figma.png" },
  { title: "Illustrator", image: "illustrator.png" },
  { title: "Photoshop", image: "photoshop.png" },
];

const project: Block[] = [
  { title: "Agile/Scrum", image: "scrum.png" },
  { title: "Jira", image: "jira.svg" },
  { title: "ClickUp", image: "clickup.png" },
];

const companies: Block[] = [
  {
    title: "Landis+Gyr",

    country: "Manchtester, UK",
    image: "landis.jpg",
  },
  {
    title: "ExternPro",

    country: "Alcañiz, SP",
    image: "externpro.png",
  },
  {
    title: "AvioRace",

    country: "Modena, IT",
    image: "avio.jpg",
  },
  {
    title: "Intique",

    country: "Manchester, UK",
    image: "intique.png",
  },
  {
    title: "Damflask Consulting",

    country: "Sheffield, UK",
    image: "damflask.png",
  },
  {
    title: "De Energiebespaarders",

    country: "Amsterdam, NL",
    image: "deb.png",
  },
  {
    title: "Erasmus Tech Community",

    country: "Rotterdam, NL",
    image: "etc.svg",
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
        {}
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
