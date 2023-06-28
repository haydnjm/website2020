import React, { ReactNode, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Box, Flex, Heading, Text } from "rebass";
import Container from "../components/Container";
import Icon from "../theme/symbols/Icon";
import Blocks from "./Blocks";

export type WorkBlock = {
  title: string;
  country?: string;
  image?: string;
  link?: string;
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
  { title: "Flutter", image: "flutter.svg" },
  { title: "gRPC", image: "grpc.png" },
  { title: "Javascript", image: "javascript.png" },
  { title: "jQuery", image: "jquery.png" },
  { title: "KMM", image: "kmm.png" },
  { title: "Kotlin", image: "kotlin.png" },
  { title: "Laravel", image: "laravel.png" },
  { title: "MQTT", image: "mqtt.png" },
  { title: "Next.js", image: "next_logo.png" },
  { title: "Node", image: "node.png" },
  { title: "PHP", image: "php.png" },
  { title: "React", image: "react.png" },
  { title: "Redux", image: "redux.png" },
  { title: "Swift", image: "swift.png" },
  { title: "SwiftUI", image: "swiftui.png" },
  { title: "Typescript", image: "typescript.png" },

  { dividerText: "Data" },
  { title: "BigQuery", image: "bq.png" },
  { title: "dbt", image: "dbt.png" },
  { title: "Firestore", image: "cloud-firestore.svg" },
  { title: "MongoDB", image: "mongo.png" },
  { title: "MySQL", image: "mysql.png" },
  { title: "Postgres", image: "postgres.png" },
  { title: "Tableau", image: "tableau.svg" },

  { dividerText: "Infrastructure" },
  { title: "AWS", image: "aws.png" },
  { title: "Docker", image: "docker.png" },
  { title: "Flux", image: "flux.png" },
  { title: "GCP", image: "gcp.png" },
  { title: "Kubernetes", image: "k8.png" },
  { title: "Terraform", image: "terraform.webp" },

  { dividerText: "Design" },
  { title: "Figma", image: "figma.png" },
  { title: "Illustrator", image: "illustrator.png" },
  { title: "Photoshop", image: "photoshop.png" },
];

const project: Block[] = [
  { title: "Agile/Scrum", image: "scrum.png" },
  { title: "ClickUp", image: "clickup.png" },
  { title: "Jira", image: "jira.svg" },
  { title: "Projects", image: "github.png" },
];

const companies: Block[] = [
  {
    title: "Landis+Gyr",

    country: "Manchtester, UK",
    image: "landis.jpg",
    link: "https://www.landisgyr.eu/",
  },
  {
    title: "ExternPro",

    country: "Alcañiz, SP",
    image: "externpro.png",
    link: "https://www.motogp.com/en/news/2013/06/12/externpro-looking-after-engines-from-motorland/161625",
  },
  {
    title: "AvioRace",

    country: "Modena, IT",
    image: "avio.jpg",
    link: "https://aviorace.it/en",
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
    link: "https://damflask-consulting.com/",
  },
  {
    title: "De Energiebespaarders",

    country: "Amsterdam, NL",
    image: "deb.png",
    link: "http://energiebespaarders.nl/",
  },
  {
    title: "Erasmus Tech Community",

    country: "Rotterdam, NL",
    image: "etc.svg",
    link: "https://www.erasmustech.io/",
  },
  {
    title: "PA Consulting",
    country: "Utrecht, NL",
    image: "pa.png",
    link: "https://www.paconsulting.com/",
  },
  {
    title: "Ivy Solutions GmbH",
    country: "Munich, DE",
    image: "ivy.jpg",
    link: "https://www.ivy-solutions.de/",
  },
];

const WorkBlocks: React.FC<{
  id: string;
  title: string;
  progress?: number;
  blocks: Block[];
  width: number;
}> = ({ title, blocks, width, id }) => {
  const [visible, setVisible] = useState(window?.location?.hash === id);

  return (
    <div id={id}>
      <Box my={3} id={id}>
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
        {visible ? (
          <Box mt={2}>
            <Text
              onClick={() => setVisible(false)}
              sx={{ cursor: "pointer", textDecoration: "underline" }}
            >
              [x] close
            </Text>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
};

const Work: React.FC = () => {
  return (
    <Container>
      <WorkBlocks
        id={"#software"}
        title="Software Engineer"
        blocks={tools}
        width={4}
      />
      <WorkBlocks
        id={"#project"}
        title="Project Manager"
        blocks={project}
        width={3}
      />
      <WorkBlocks
        id={"#companies"}
        title="Who I've worked with"
        blocks={companies}
        width={2}
      />
    </Container>
  );
};

export default Work;
