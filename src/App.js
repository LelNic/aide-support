import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Css from "./components/Css/Css";
import Dom from "./components/Dom/Dom";
import Github from "./components/Github/Github";
import Home from "./components/Home/Home";
import Html from "./components/Html/Html";
import Navbar from "./components/Navbar/Navbar";
import Javascript from "./components/Javascript/Javascript";
import Reactjs from "./components/Reactjs/Reactjs";
import Mysql from "./components/Mysql/Mysql";
// import tuyau from "../src/asset/tuyau.png";

export default function App() {
    return (
        <Router>
            <Navbar />
            <main className="list">
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
                        <Reactjs />
                    </Route>
                    <Route exact path="/mysql">
                        <Mysql />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}
