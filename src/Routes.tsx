import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import Writing from "./writing";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="blog" component={Writing} />
    </Router>
  );
};

export default Routes;
