import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import html from "../../asset/html.png";
import css from "../../asset/css.png";
import javascript from "../../asset/js.png";
import reat from "../../asset/react-logo.png";
import github from "../../asset/octo.png";
import mysql from "../../asset/mysql.png";
import Logo from "../../asset/wds.svg";

const Navbar = () => {
    return (
        <nav>
            <ul className="tab">
                <Link to="/home">
                    <li>
                        <img src={Logo} className="logo" alt="logo du site Web Dev Support" />
                    </li>
                </Link>
                <Link to="/html">
                    <li>
                        <img src={html} alt="Logo Html" />
                    </li>
                </Link>
                <Link to="/css">
                    <li>
                        <img src={css} alt="Logo CSS" />
                    </li>
                </Link>
                <Link to="javascript">
                    <li>
                        <img src={javascript} alt="LogoJavascript" />
                    </li>
                </Link>
                <Link to="/dom">
                    <li>DOM</li>
                </Link>
                <Link to="react">
                    <li>
                        <img src={reat} alt="Logo React" />
                    </li>
                </Link>
                <Link to="/github">
                    <li>
                        <img src={github} alt="Logo Github" />
                    </li>
                </Link>
                <Link to="mysql">
                    <li>
                        <img src={mysql} alt="Logo Mysql" />
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
