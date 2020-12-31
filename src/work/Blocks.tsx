import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "rebass";
import { Block } from ".";
import Transitioner from "../components/Transitioner";

interface BlocksProps {
  blocks: Block[];
  width: number;
}

const Blocks: React.FC<BlocksProps> = ({ blocks, width }) => {
  const [showing, setShowing] = useState(0);

  useEffect(() => {
    blocks.forEach((_, i) => {
      setTimeout(() => {
        setShowing(i + 1);
      }, 50 * i);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex flexWrap="wrap" m={-1}>
      {blocks.map((block, i) => {
        return (
          <Box p={1} width={[1, 1, 1 / (width - 1), 1 / width]}>
            <Transitioner show={showing > i} duration={1500}>
              <Box
                p={3}
                backgroundColor="primary"
                color="codeBaseColor"
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 3px 6px -3px #00000066",
                  transition: "0.1s",
                  ":hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <Box ml={1}>
                    <Text fontSize={[3]} m={0} p={0} sx={{ cursor: "default" }}>
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
            </Transitioner>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Blocks;
