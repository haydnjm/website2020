import React, { useEffect, useMemo, useState } from "react";
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

const blockTypeGuard = (block: Block): block is TWorkBlock => {
  return "title" in block;
};
const dividerTypeGuard = (block: Block): block is TDivider => {
  return "dividerText" in block;
};

const WorkBlock: React.FC<{ block: TWorkBlock }> = ({ block }) => {
  return (
    <Box
      p={3}
      backgroundColor="primary"
      color="codeBaseColor"
      sx={{
        height: block.large ? "140px" : "66px",
        borderRadius: 3,
        boxShadow: "0 3px 6px -3px #00000066",
        transition: "0.1s",
        ":hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <Flex alignItems="center" justifyContent="space-between" height={"100%"}>
        <Box ml={1}>
          <Text
            fontSize={block.large ? [3] : [2]}
            m={0}
            p={0}
            sx={{ cursor: "default" }}
          >
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
                : block.country.includes("DE")
                ? "🇩🇪 "
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
            maxHeight={
              block.country ? ["40px"] : block.large ? ["50px"] : ["25px"]
            }
            maxWidth={
              block.country ? ["40px"] : block.large ? ["50px"] : ["25px"]
            }
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
    [...blocks, undefined].forEach((_, i) => {
      setTimeout(() => {
        setShowing(i + 1);
      }, 50 * i);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const groupedBlocks = useMemo(() => {
    const groupedBlocks: Block[][] = [];
    const tmp = [...blocks];
    let i = 0; // block position (can be stacked small blocks or a large block)

    while (tmp.length > 0) {
      const b = tmp.shift();

      if (!b) continue;

      // put dividers or large blocks in as soon as they pop up
      if (dividerTypeGuard(b) || (blockTypeGuard(b) && b.large)) {
        groupedBlocks[i] = [b];
        i++;
        continue;
      }

      // If it's small block, and the next block is large, then get the next small block to fill the gap
      if (blockTypeGuard(b)) {
        const nextLargeBlock = tmp.find((b) => blockTypeGuard(b) && b.large);
        const nextDivider = tmp.find(dividerTypeGuard);

        // If there's no large block, or theres a divider before the next large block, then just put it in the current group
        if (
          !nextLargeBlock ||
          !nextDivider ||
          tmp.indexOf(nextDivider) < tmp.indexOf(nextLargeBlock)
        ) {
          groupedBlocks[i] = [b];
          i++;
          continue;
        }

        groupedBlocks[i] = [b];
        const nextSmallBlock = tmp.find((b) => blockTypeGuard(b) && !b.large);

        if (nextSmallBlock) {
          const indexNextSmall = tmp.indexOf(nextSmallBlock);
          const indexNextDivider = nextDivider
            ? tmp.indexOf(nextDivider)
            : Number.MAX_VALUE;

          if (indexNextSmall < indexNextDivider) {
            groupedBlocks[i].push(nextSmallBlock);
            tmp.splice(indexNextSmall, 1);
          }
        }

        i++;
        continue;
      }
    }

    return groupedBlocks;
  }, []);

  let i = 0;

  console.log("RERENDERING BLOCKS");

  return (
    <>
      <Flex flexWrap="wrap" m={-1}>
        {groupedBlocks.map((blockGroup, groupIndex) => {
          if (blockGroup.length === 1 && "dividerText" in blockGroup[0]) {
            i++;
            return (
              <Box width={1} key={groupIndex}>
                <Transitioner show={showing > i} duration={1500}>
                  <Divider divider={blockGroup[0]} />
                </Transitioner>
              </Box>
            );
          }

          if (blockGroup.length === 1 && (blockGroup[0] as TWorkBlock).large) {
            const block = blockGroup[0] as TWorkBlock;
            i++;
            return (
              <Box key={groupIndex} p={1} width={[1, 1, 2 / width, 2 / width]}>
                <Transitioner show={showing > i} duration={1500}>
                  <WrappedWorkBlock block={block} />
                </Transitioner>
              </Box>
            );
          }

          if (blockGroup.length === 2) {
            const first = i;
            const second = i + 1;
            i += 2;
            return (
              <Box key={groupIndex} width={[1, 1, 1 / width, 1 / width]} p={-1}>
                <Transitioner show={showing > first} duration={1500}>
                  <Box key={"block" + first} m={1}>
                    <WrappedWorkBlock block={blockGroup[0] as TWorkBlock} />
                  </Box>
                  <Box key={"block" + second} m={1} mt={2}>
                    <WrappedWorkBlock block={blockGroup[1] as TWorkBlock} />
                  </Box>
                </Transitioner>
              </Box>
            );
          }

          i++;
          return (
            <Box key={groupIndex} width={[1, 1, 1 / width, 1 / width]} p={1}>
              <Transitioner show={showing > i} duration={1500}>
                <WrappedWorkBlock block={blockGroup[0] as TWorkBlock} />
              </Transitioner>
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default Blocks;
