import React, { useState } from "react";
import Container from "../components/Container";
import MatchBetweenDates from "./match/MatchBetweenDates";
import LookupBooksBasedOnAuthorId from "./lookup/LookupBooksBasedOnAuthorId";
import LookupAuthorBasedOnId from "./lookup/LookupAuthorBasedOnId";
import HomeIcon from "../components/HomeIcon";
import MatchArrayLength from "./match/MatchArrayLength";
import SortArraysWithinDocuments from "./general/SortArraysWithinDocuments";

interface MongoCheatSheetProps {}
export interface CodeProps {
  copied: boolean;
  setCopied: () => void
}

const MongoCheatSheet: React.FC<MongoCheatSheetProps> = () => {
  const [copied, setCopied] = useState<number | null>(null);
  return (
    <Container>
      <HomeIcon />
      <h1>MONGO</h1>
      <h2>MATCH</h2>
      <MatchBetweenDates copied={copied === 1} setCopied={() => setCopied(1)} />
      <MatchArrayLength copied={copied === 2} setCopied={() => setCopied(2)} />
      <h2>LOOKUP</h2>
      <LookupAuthorBasedOnId copied={copied === 4} setCopied={() => setCopied(4)} />
      <LookupBooksBasedOnAuthorId copied={copied === 3} setCopied={() => setCopied(3)} />
      <h2>ARRAYS</h2>
      <SortArraysWithinDocuments copied={copied === 5} setCopied={() => setCopied(5)} />
    </Container>
  );
};

export default MongoCheatSheet;
