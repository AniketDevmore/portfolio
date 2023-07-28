import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navigation">
        <div className="leftSide">
          <h1>
            <Link to={`/`}>Portfolio</Link>
          </h1>
        </div>
        <div className="rightSide">
          <input type="checkbox" id="checkbox-toggle" />
          <label htmlFor="checkbox-toggle" className="hamburger">
            <span className="ham">☰</span>
            <span className="close">X</span>
          </label>
          <div className="menu">
            <ul className="navMenu">
              <li>
                <Link to={`/about`}>About</Link>
              </li>
              <li>
                <Link to={`/allProjects`}>Project</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
