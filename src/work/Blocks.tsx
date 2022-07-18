import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "rebass";
import { Block, Divider as TDivider, WorkBlock as TWorkBlock } from ".";
import Link from "../components/Link";
import Transitioner from "../components/Transitioner";

const WrappedWorkBlock: React.FC<{ block: TWorkBlock }> = ({ block }) => {
  if (block.link) {
    return (
      <Link to={block.link} external newTab sx={{ textDecoration: "none" }}>
        <WorkBlock block={block} />
      </Link>
    );
  }
  return <WorkBlock block={block} />;
};

const WorkBlock: React.FC<{ block: TWorkBlock }> = ({ block }) => {
  return (
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
  );
};

const Divider: React.FC<{ divider: TDivider }> = ({ divider }) => {
  return (
    <Flex width="100%" alignItems="center" my={3}>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "gray",
          height: 0,
          flexGrow: 1,
        }}
      />
      <Box px={5}>
        <Text
          sx={{
            color: "gray",
            fontSize: 1,
          }}
        >
          {divider.dividerText}
        </Text>
      </Box>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "gray",
          height: 0,
          flexGrow: 1,
        }}
      />
    </Flex>
  );
};

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
        return "dividerText" in block ? (
          <Box width={1} key={"block" + i}>
            <Transitioner show={showing > i} duration={1500}>
              <Divider divider={block} />
            </Transitioner>
          </Box>
        ) : (
          <Box
            key={"block" + i}
            p={1}
            width={[1, 1, 1 / (width - 1), 1 / width]}
          >
            <Transitioner show={showing > i} duration={1500}>
              <WrappedWorkBlock block={block} />
            </Transitioner>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Blocks;
