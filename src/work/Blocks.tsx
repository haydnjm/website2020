import React from "react";
import { Box, Flex, Image, Text } from "rebass";
import { Block } from ".";

interface BlocksProps {
  blocks: Block[];
  width: number;
}

const Blocks: React.FC<BlocksProps> = ({ blocks, width }) => {
  return (
    <Flex flexWrap="wrap" m={-1}>
      {blocks.map((block) => (
        <Box p={1} width={[1, 1 / width + 1, 1 / width]}>
          <Box
            p={3}
            backgroundColor={"codeBackground"}
            color="text"
            sx={{ borderRadius: 3, boxShadow: "0 3px 6px -3px #00000066" }}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Box ml={1}>
                <Text fontSize={[3]} m={0} p={0}>
                  {block.title}
                </Text>
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
              {block.image ? (
                <Image
                  src={`imgs/${block.image}`}
                  maxHeight={block.country ? ["40px"] : ["25px"]}
                  maxWidth={block.country ? ["40px"] : ["25px"]}
                />
              ) : (
                <></>
              )}
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Blocks;
