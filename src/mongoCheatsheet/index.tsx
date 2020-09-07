import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import MatchBetweenDates from "./match/MatchBetweenDates";
import LookupBooksBasedOnAuthorId from "./lookup/LookupBooksBasedOnAuthorId";
import LookupAuthorBasedOnId from "./lookup/LookupAuthorBasedOnId";
import HomeIcon from "../components/HomeIcon";
import MatchArrayLength from "./match/MatchArrayLength";
import SortArraysWithinDocuments from "./general/SortArraysWithinDocuments";
import SumUsingGroup from "./group/SumUsingGroup";
import CountUsingGroup from "./group/CountDocuments";
import MatchBeforeDate from "./match/MarchBeforeDate";
import MatchAfterDate from "./match/MatchAfterDate";

interface MongoCheatSheetProps {}
export interface CodeProps {
  copied: boolean;
  setCopied: () => void;
}

const MongoCheatSheet: React.FC<MongoCheatSheetProps> = () => {
  const [copied, setCopied] = useState<number | null>(null);

  return (
    <Container>
      <HomeIcon />
      <h1>MONGO</h1>
      <h2>Matching</h2>
      <MatchBeforeDate copied={copied === 8} setCopied={() => setCopied(8)} />
      <MatchAfterDate copied={copied === 9} setCopied={() => setCopied(9)} />
      <MatchBetweenDates copied={copied === 1} setCopied={() => setCopied(1)} />
      <h2>Lookups</h2>
      <LookupAuthorBasedOnId
        copied={copied === 4}
        setCopied={() => setCopied(4)}
      />
      <LookupBooksBasedOnAuthorId
        copied={copied === 3}
        setCopied={() => setCopied(3)}
      />
      <h2>Grouping</h2>
      <CountUsingGroup copied={copied === 7} setCopied={() => setCopied(7)} />
      <SumUsingGroup copied={copied === 6} setCopied={() => setCopied(6)} />
      <h2>Arrays within documents</h2>
      <SortArraysWithinDocuments
        copied={copied === 5}
        setCopied={() => setCopied(5)}
      />
      <MatchArrayLength copied={copied === 2} setCopied={() => setCopied(2)} />
    </Container>
  );
};

export default MongoCheatSheet;
