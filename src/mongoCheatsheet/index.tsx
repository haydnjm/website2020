import React, { useState } from "react";
import Container from "../components/Container";
import MatchBetweenDates from "./match/MatchBetweenDates";
import LookupBooksBasedOnAuthorId from "./lookup/LookupBooksBasedOnAuthorId";
import LookupAuthorBasedOnId from "./lookup/LookupAuthorBasedOnId";
import HomeIcon from "../components/HomeIcon";
import MatchArrayLength from "./match/MatchArrayLength";
import SortArraysWithinDocuments from "./general/SortArraysWithinDocuments";
import SumUsingGroup from "./group/SumUsingGroup";
import CountUsingGroup from "./group/CountDocuments";
import MatchBeforeDate from "./match/MatchBeforeDate";
import MatchAfterDate from "./match/MatchAfterDate";
import MatchPartOfString from "./match/MatchPartOfString";
import MatchWholeString from "./match/MatchWholeString";
import { Box, Flex, Text } from "rebass";
import Link from "../components/Link";

interface MongoCheatSheetProps {}
export interface CodeProps {
  copied: boolean;
  setCopied: () => void;
  width?: number;
}

const MongoCheatSheet: React.FC<MongoCheatSheetProps> = () => {
  const [copied, setCopied] = useState<number | null>(null);

  return (
    <Container size="l">
      <HomeIcon />
      <h1>Mongo Aggregation Quick-reference</h1>
      <h2>Matching</h2>
      <Flex flexWrap="wrap">
        <MatchBeforeDate copied={copied === 8} setCopied={() => setCopied(8)} />
        <MatchAfterDate copied={copied === 9} setCopied={() => setCopied(9)} />
        <MatchBetweenDates
          copied={copied === 1}
          setCopied={() => setCopied(1)}
        />
        <MatchWholeString
          copied={copied === 10}
          setCopied={() => setCopied(10)}
        />
        <MatchPartOfString
          copied={copied === 11}
          setCopied={() => setCopied(11)}
        />
      </Flex>
      <h2>Lookups</h2>
      <Flex flexWrap="wrap">
        <LookupBooksBasedOnAuthorId
          copied={copied === 3}
          setCopied={() => setCopied(3)}
        />
        <LookupAuthorBasedOnId
          copied={copied === 4}
          setCopied={() => setCopied(4)}
        />
      </Flex>
      <h2>Grouping</h2>
      <Flex flexWrap="wrap">
        <CountUsingGroup copied={copied === 7} setCopied={() => setCopied(7)} />
        <SumUsingGroup copied={copied === 6} setCopied={() => setCopied(6)} />
      </Flex>
      <h2>Arrays within documents</h2>
      <Flex flexWrap="wrap">
        <MatchArrayLength
          copied={copied === 2}
          setCopied={() => setCopied(2)}
        />
        <SortArraysWithinDocuments
          copied={copied === 5}
          setCopied={() => setCopied(5)}
        />
      </Flex>
      <Box pt={150} sx={{ textAlign: "center" }}>
        <Text>
          <Link
            to="https://haydnjmorris.medium.com/mongodb-aggregation-cheatsheet-a0afacefa81c"
            external={true}
            newTab={true}
          >
            This
          </Link>{" "}
          is an article I wrote about building aggregation pipelines
        </Text>
        <Text>
          If there are any that you'd like to see added then send me a comment
          over there or let me know via{" "}
          <Link
            to="https://www.linkedin.com/in/haydn-morris-18b1b3a5/"
            external={true}
            newTab={true}
          >
            LinkedIn
          </Link>{" "}
          <span role="img" aria-label="thumbs up">
            👍
          </span>
        </Text>
      </Box>
    </Container>
  );
};

export default MongoCheatSheet;
