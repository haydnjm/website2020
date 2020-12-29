import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Box, Flex, Heading, Image, Text } from "rebass";
import Container from "../components/Container";
import Icon from "../theme/symbols/Icon";

type Block = {
  title: string;
  colour: string;
  country?: string;
  image?: string;
};

const tools: Block[] = [
  { title: "Apollo", colour: "purple", image: "imgs/apollo.png" },
  { title: "AWS", colour: "yellow", image: "imgs/aws.png" },
  { title: "GCP", colour: "blue", image: "imgs/gcp.png" },
  { title: "Github", colour: "black", image: "imgs/xxx.png" },
  { title: "Go", colour: "blue", image: "imgs/go.png" },
  { title: "GraphQL", colour: "pink", image: "imgs/graphql.svg" },
  { title: "GRPC", colour: "gray", image: "imgs/grpc.png" },
  { title: "Illustrator", colour: "yellow", image: "imgs/illustrator.png" },
  { title: "Javascript", colour: "yellow", image: "imgs/javascript.png" },
  { title: "jQuery", colour: "blue", image: "imgs/jquery.png" },
  { title: "Lambda", colour: "red", image: "imgs/lambda.png" },
  { title: "Kotlin", colour: "red", image: "imgs/kotlin.png" },
  { title: "Laravel", colour: "red", image: "imgs/laravel.png" },
  { title: "MongoDB", colour: "green", image: "imgs/mongo.png" },
  { title: "MySQL", colour: "blue", image: "imgs/mysql.png" },
  { title: "Node", colour: "green", image: "imgs/node.png" },
  { title: "Photoshop", colour: "blue", image: "imgs/photoshop.png" },
  { title: "PHP", colour: "red", image: "imgs/php.png" },
  { title: "React", colour: "cyan", image: "imgs/react.png" },
  { title: "Redux", colour: "purple", image: "imgs/redux.png" },
  { title: "S3", colour: "yellow", image: "imgs/s3.png" },
  { title: "Swift", colour: "purple", image: "imgs/swift.png" },
  { title: "Typescript", colour: "blue", image: "imgs/typescript.png" },
];

const project: Block[] = [
  { title: "Agile", colour: "red" },
  { title: "Scrum", colour: "red" },
  { title: "Jira", colour: "red" },
  { title: "ClickUp", colour: "red" },
];

const companies: Block[] = [
  { title: "Landis+Gyr", colour: "transparent", country: "Manchtester, UK" },
  { title: "ExternPro", colour: "transparent", country: "Alcañiz, SP" },
  { title: "AvioRace", colour: "transparent", country: "Modena, IT" },
  {
    title: "Intique LINK TO MEDIUM",
    colour: "transparent",
    country: "Manchester, UK",
  },
  {
    title: "Damflask Consulting",
    colour: "transparent",
    country: "Sheffield, UK",
  },
  {
    title: "De Energiebespaarders",
    colour: "transparent",
    country: "Amsterdam, NL",
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
              transition: "0.2s",
            }}
          />
        </Box>
      </Flex>
      {visible ? (
        <Flex flexWrap="wrap" m={-1}>
          {blocks.map((block) => (
            <Box p={1} width={[1, 1 / width + 1, 1 / width]}>
              <Box p={3} backgroundColor={"#000"} sx={{ borderRadius: 3 }}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Box ml={1}>
                    <Text fontSize={[3]} m={0} p={0}>
                      {block.title}
                    </Text>
                  </Box>
                  {block.image ? (
                    <Image
                      src={block.image}
                      maxHeight={["25px"]}
                      maxWidth={["25px"]}
                    />
                  ) : (
                    <></>
                  )}
                </Flex>
                {block.country ? (
                  <Text fontSize={[2]} m={0} p={0} color="text">
                    {block.country.includes("UK")
                      ? "🇬🇧 "
                      : block.country.includes("IT")
                      ? "🇮🇹 "
                      : block.country.includes("NL")
                      ? "🇳🇱 "
                      : block.country.includes("SP")
                      ? "🇪🇸 "
                      : "XXX"}
                    {block.country}
                  </Text>
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          ))}
        </Flex>
      ) : (
        <></>
      )}
    </Box>
  );
};

const Work: React.FC = () => {
  return (
    <Container>
      <WorkBlocks title="Software Engineer" blocks={tools} width={4} />
      <WorkBlocks title="Project Manager" blocks={project} width={2} />
      <WorkBlocks title="Who I've worked with" blocks={companies} width={2} />
    </Container>
  );
};

export default Work;
