import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/css">CSS</Link>
        </li>
        <li>
          <Link to="/dom">DOM</Link>
        </li>
        <li>
          <Link to="/github">GitHub</Link>
        </li>
        <li>
          <Link to="/html">Html</Link>
        </li>
        <li>
          <Link to="javascript">JavaScript</Link>
        </li>
        <li>
          <Link to="react">React</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;