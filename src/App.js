import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Css from './components/Css';
import Dom from './components/Dom';
import Home from './components/Home';
import Html from './components/Html';
import Navbar from './components/Navbar';
import Javascript from './components/Javascript';
import Reat from './components/Reat';


export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route path="/home"/>
            <Home />
          </Route>
          <Route path="/css"/>
            <Css />
          </Route>
          <Route path="/dom">
            <Dom/>
          </Route>
          <Route path="/github">
            <Github />
          </Route>
          <Route path="/html">
            <Html />
          </Route>
          <Route path="/javascript">
            <Javascript />
          </Route>
          <Route path="/react">
            <Reat/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
