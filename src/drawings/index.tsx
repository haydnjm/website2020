import React from "react";
import { Flex, Box, Image } from "rebass";

interface DrawingsProps {}

const imgs = ["/imgs/shef.jpg", "/imgs/ij.jpg", "/imgs/garden.jpg"];

const Drawings: React.FC<DrawingsProps> = () => {
  return (
    <Flex>
      {imgs.map((img) => (
        <Box width={[1 / 3]}>
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
      ))}
    </Flex>
  );
};

export default Drawings;
