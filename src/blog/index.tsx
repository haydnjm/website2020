import React from "react";
import { Box, Heading, Image, Text } from "rebass";
import Container from "../components/Container";
import Link from "../components/Link";

interface BlogProps {}

const BlogPost: React.FC<{
  blog: {
    title: string;
    image: string;
    link: string;
  };
}> = ({ blog: { title, image, link } }) => {
  return (
    <Link
      to={link}
      external={true}
      newTab={true}
      sx={{ textDecoration: "none" }}
    >
      <Box>
        <Image
          width={"100%"}
          src={image}
          backgroundColor="white"
          sx={{
            boxShadow: "0 3px 6px -3px #00000066",
          }}
        />
        <Heading my={1}>{title}</Heading>
        <Text color="comment" fontWeight="bold">
          Read more...
        </Text>
      </Box>
      <Box p={5}>
        <hr />
      </Box>
    </Link>
  );
};

const blogs = [
  {
    title: "The MongoDB Aggregation Cheatsheet",
    image: "https://miro.medium.com/max/2000/1*MoCIvgRD6qkz5nA_OFBSKg.png",
    link:
      "https://medium.com/@haydnjmorris/mongodb-aggregation-cheatsheet-a0afacefa81c",
  },
  {
    title: "AWS Lambda + Node Modules, no Docker required",
    image: "https://miro.medium.com/max/2000/1*H1FXgfGQozhUNniuSkQohg.jpeg",
    link:
      "https://medium.com/@haydnjmorris/aws-lambda-node-modules-no-docker-required-76443a0f6c4e",
  },
  {
    title: "Uploading photos to AWS S3 — getting started with Cognito and IAM",
    image: "https://miro.medium.com/max/1400/1*dFf3IZxx2a4HfQdSth26GQ.png",
    link:
      "https://haydnjmorris.medium.com/uploading-photos-to-aws-s3-getting-started-with-cognito-and-iam-c96ba5b5496d",
  },
  {
    title: "A bird’s-eye view of Redux for beginners",
    image: "https://miro.medium.com/max/1400/1*HTi9e_0kSlc6MXCj91PJAA.png",
    link:
      "https://medium.com/@haydnjmorris/page-5-a-birds-eye-view-of-redux-for-beginners-813edda7a9ee",
  },
  {
    title: "Dynamically typed vs statically typed languages",
    image: "https://miro.medium.com/max/2000/1*D_Ly10_ch7_8vLRWnjBo4w.jpeg",
    link:
      "https://medium.com/@haydnjmorris/page-2-dynamically-typed-vs-statically-typed-languages-e507ac463496",
  },
];

const Blog: React.FC<BlogProps> = () => {
  return (
    <Container>
      <Heading fontSize={[6]} my={3}>
        Writing
      </Heading>
      {blogs.map((blog) => (
        <BlogPost blog={blog} />
      ))}
    </Container>
  );
};

export default Blog;
