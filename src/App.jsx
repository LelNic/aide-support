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
import FormJs from "./components/FormJs/FormJs";
import FormCss from "./components/FomCss/FormCss";
import FormHtml from "./components/FormHtml/FormHtml";
import FormReact from "./components/FormReact/FormReact";
import FormGit from "./components/FormGit/FormGit";
import FormMysql from "./components/FormMysql/FormMysql";
// import tuyau from "../src/asset/tuyau.png";

export default function App() {
    return (
        <Router>
            <Navbar />
            <main className="list">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/css">
                        <Css />
                    </Route>
                    <Route exact path="/dom">
                        <Dom />
                    </Route>
                    <Route exact path="/git">
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
                    <Route exact path="/javascript/add">
                        <FormJs />
                    </Route>
                    <Route exact path="/css/add">
                        <FormCss />
                    </Route>
                    <Route exact path="/git/add">
                        <FormGit />
                    </Route>
                    <Route exact path="/react/add">
                        <FormReact />
                    </Route>
                    <Route exact path="/mysql/add">
                        <FormMysql />
                    </Route>
                    <Route exact path="/html/add">
                        <FormHtml />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}
