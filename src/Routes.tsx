import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import Writing from "./writing";
import Drawings from "./drawings";
import MongoCheatSheet from "./mongoCheatsheet";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Writing} />
      <Route exact path="/doodle" component={Drawings} />
      <Route exact path="/mongo-cheatsheet" component={MongoCheatSheet} />
    </Router>
  );
};

export default Routes;
