import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import home from "../../asset/home.png";
import html from "../../asset/html.png";
import css from "../../asset/css.png";
import javascript from "../../asset/js.png";
import reat from "../../asset/react-logo.png";
import github from "../../asset/Octocat.png";
import mysql from "../../asset/mysql.png";

const Navbar = () => {
  return (
    <nav>
      <ul className="tab">
        <li>
          <Link to="/home"></Link>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="/home">
                <img src={home} alt="" width="80" height="60" />
              </a>
            </div>
          </nav>
        </li>
        <li>
          <Link to="/html"></Link>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="/home">
                <img src={html} alt="" width="80" height="60" />
              </a>
            </div>
          </nav>
        </li>
        <li>
          <Link to="/css"></Link>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="/css">
                <img src={css} alt="" width="58" height="60" />
              </a>
            </div>
          </nav>
        </li>
        <li>
          <Link to="javascript"></Link>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="/javascript">
                <img src={javascript} alt="" width="82" height="70" />
              </a>
            </div>
          </nav>
        </li>
        <li>
          <Link to="/dom">DOM</Link>
        </li>
        <li>
          <Link to="react"></Link>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="/react">
                <img src={reat} alt="" width="80" height="60" />
              </a>
            </div>
          </nav>
        </li>
        <li>
          <Link to="/github"></Link>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="/github">
                <img src={github} alt="" width="80" height="60" />
              </a>
            </div>
          </nav>
        </li>
        <li>
          <Link to="mysql"></Link>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="/mysql">
                <img src={mysql} alt="" width="80" height="60" />
              </a>
            </div>
          </nav>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
