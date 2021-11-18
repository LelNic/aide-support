import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="tab">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/html">Html</Link>
        </li>
        <li>
          <Link to="/css">CSS</Link>
        </li>
        <li>
          <Link to="/dom">DOM</Link>
        </li>
        <li>
          <Link to="javascript">JavaScript</Link>
        </li>
        <li>
          <Link to="react">React</Link>
        </li>
        <li>
          <Link to="/github">GitHub</Link>
        </li>
        <li>
          <Link to="mysql">MySql</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
