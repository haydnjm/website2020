import React from "react";
import { Heading, Image, Text, Flex, Box } from "rebass";
import FloatingIcons from "../components/floaters/Floaters";
import Container from "../components/Container";

const works = [
  {
    title: "De Energiebespaarders",
    date: "From March 2019",
    img: "/imgs/homie_WEB.png",
    info: [
      `De Energibespaarders is a Dutch startup based in Amsterdam that helps homeowners to save energy and
    money be providing home inspections, advice on different energy saving solutions, and physical
    installations of the solutions. `,
      `Through a combination of expert knowloedge and flexible tooling De Energiebespaarders is able to provide
    energy saving solutions to homes of all shapes and sizes
    `,
    ],
  },
  {
    title: "Intique",
    img: "/imgs/intique.png",
    date: "November 2017 - June 2019",
    info: [
      `Intique was an online furniture marketplace that I started with James Broad, an interiors expert and lifelong friend of mine.`,
      `We set out to build the first multi-sided interiors platform to give sellers the opportunity to brand themselves through the platform, as well as sell their stock.`,
      `We grew our community of sellers to 60 independent businesses across the UK, with over £3m of furnture on the marketplace before deciding to close the platform to pursue other projects.`,
    ],
  },
  {
    title: "Aviorace Srl.",
    img: "/imgs/avio.jpg",
    date: "September 2015 - August 2016",
    info: [
      `Aviorace is an Italian market leading provider of electrical and electronic solutions for customers in the motorsport, automotive, aerospace and marine industries.`,
      `Specialising in bespoke electronic solutions, diagnotics services and high quality components and connectors Aviorace assists clients from independent racing teams to
      Formula 1 acieve their full racing potential.`,
    ],
  },
  {
    title: "MEng, Mechatronic & Robotic Engineering",
    img: "/imgs/uni.png",
    date: "September 2012 - July 2017",
    info: [
      `My time at the University of Sheffield allowed me to discover not only my strengths, but what I love.`,
      `Covering a variety of engineering domains from mechanics, to software, to control theory, challenged me to think both widely and deeply,
 and provided me with a thirst for learning and innovation.`,
      `This was when I realised that it was not a specific topic of engineering that had me hooked, but the application of engineering principles to
solve peoples' problems, regardless of what they require.`,
    ],
  },
];
const tools = [
  { title: "Apollo", src: "imgs/apollo.png" },
  { title: "AWS", src: "imgs/aws.png" },
  { title: "GCP", src: "imgs/gcp.png" },
  { title: "Github", src: "imgs/github.png" },
  { title: "Go", src: "imgs/go.jpg" },
  { title: "Graphql", src: "imgs/graphql.svg" },
  { title: "GRPC", src: "imgs/grpc.png" },
  { title: "Illustrator", src: "imgs/illustrator.png" },
  { title: "Javascript", src: "imgs/javascript.png" },
  { title: "Jquery", src: "imgs/jquery.png" },
  { title: "Lambda", src: "imgs/lambda.png" },
  { title: "Laravel", src: "imgs/laravel.png" },
  { title: "MongoDB", src: "imgs/mongo.png" },
  { title: "MySQL", src: "imgs/mysql.png" },
  { title: "Node", src: "imgs/node.png" },
  { title: "Photoshop", src: "imgs/photoshop.png" },
  { title: "PHP", src: "imgs/php.png" },
  { title: "React", src: "imgs/react.png" },
  { title: "Redux", src: "imgs/redux.png" },

  { title: "S3", src: "imgs/s3.png" },
  { title: "Stripe", src: "imgs/stripe.png" },
  { title: "Typescript", src: "imgs/typescript.png" },
];

const Work: React.FC = () => {
  return (
    <Box
      height={[1500]}
      sx={{
        position: "relative",
        overflowX: "hidden",
        zIndex: 10,
      }}
    >
      <FloatingIcons ids={tools} />
      {/* {
        tools.map(tool => )
      } */}
      <Container
        sx={{
          margin: "auto",
          position: "relative",
        }}
      >
        {works.map((work, i) => (
          <Box key={work.title + i} my={"60px"}>
            <Flex>
              <Box width={1 / 3} mr={"6px"}>
                <Image
                  src={work.img}
                  maxWidth={["200px"]}
                  maxHeight={["200px"]}
                />
              </Box>
              <Box width={2 / 3}>
                <Heading mb={"9px"}>{work.title}</Heading>
                <Heading fontSize={[2]} fontStyle="italic" mb={"9px"}>
                  {work.date}
                </Heading>
                {work.info.map((info, j) => (
                  <Text
                    key={`work info ${j} paragraph ${i}`}
                    fontSize={[1]}
                    mb="6px"
                  >
                    {info}
                  </Text>
                ))}
              </Box>
            </Flex>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Work;
