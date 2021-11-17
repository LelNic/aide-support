import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Css from "./components/Css";
import Dom from "./components/Dom";
import Github from "./components/Github";
import Home from "./components/Home";
import Html from "./components/Html";
import Navbar from "./components/Navbar";
import Javascript from "./components/Javascript";
import Reat from "./components/Reat";
import Mysql from "./components/Mysql";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/css">
            <Css />
          </Route>
          <Route exact path="/dom">
            <Dom />
          </Route>
          <Route exact path="/github">
            <Github />
          </Route>
          <Route exact path="/html">
            <Html />
          </Route>
          <Route exact path="/javascript">
            <Javascript />
          </Route>
          <Route exact path="/react">
            <Reat />
          </Route>
          <Route exact path="/mysql">
            <Mysql />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
