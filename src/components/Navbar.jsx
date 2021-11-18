import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import home from "../asset/home.png";
import html from "../asset/html.png";
import css from "../asset/css.png";
import javascript from "../asset/js.png";
import reat from "../asset/react-logo.png";
import github from "../asset/Octocat.png";
import mysql from "../asset/mysql.png";

const Navbar = () => {
  return (
    <nav>
      <ul className="tab">
        <li>
          <Link to="/home">Home</Link>
          <img src={home} alt="" />
        </li>
        <li>
          <Link to="/html">Html</Link>
          <img src={html} alt="" />
        </li>
        <li>
          <Link to="/css">CSS</Link>
          <img src={css} alt="" />
        </li>
        <li>
          <Link to="/dom">DOM</Link>
        </li>
        <li>
          <Link to="javascript">JavaScript</Link>
          <img src={javascript} alt="" />
        </li>
        <li>
          <Link to="react">React</Link>
          <img src={reat} alt="" />
        </li>
        <li>
          <Link to="/github">GitHub</Link>
          <img src={github} alt="" />
        </li>
        <li>
          <Link to="mysql">MySql</Link>
          <img src={mysql} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
