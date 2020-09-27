import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Writing from "./writing";
import Drawings from "./drawings";
import MongoCheatSheet from "./mongoCheatsheet";
import { Box, Flex, Heading } from "rebass";
import Container from "./components/Container";
import StyledLink from "./components/Link";

interface RoutesProps {}

const FourOhFour: React.FC = () => {
  return (
    <Box>
      <Container size="m" sx={{ height: "100vh" }}>
        <StyledLink to="/" sx={{ textDecorationLine: "none" }}>
          <Flex
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{ textAlign: "center" }}
            flexDirection="column"
          >
            <Box>
              <Heading fontSize={[4]}>404</Heading>
            </Box>
          </Flex>
        </StyledLink>
      </Container>
    </Box>
  );
};

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Writing} />
      <Route exact path="/draw" component={Drawings} />
      <Route exact path="/mongo-cheatsheet" component={MongoCheatSheet} />
      <Route render={() => <FourOhFour />} />
    </Switch>
  );
};

export default Routes;
