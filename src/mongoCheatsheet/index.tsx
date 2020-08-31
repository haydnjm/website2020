import React from "react";
import Container from "../components/Container";
import MatchBetweenDates from "./match/MatchBetweenDates";
import LookupBooksBasedOnAuthorId from "./lookup/LookupBooksBasedOnAuthorId";
import LookupAuthorBasedOnId from "./lookup/LookupAuthorBasedOnId";

interface MongoCheatSheetProps {}

const MongoCheatSheet: React.FC<MongoCheatSheetProps> = () => {
  return (
    <Container>
      <h1>MONGO</h1>
      <h2>MATCH</h2>
      <MatchBetweenDates />
      <h2>LOOKUP</h2>
      <LookupBooksBasedOnAuthorId />
      <LookupAuthorBasedOnId />
    </Container>
  );
};

export default MongoCheatSheet;
