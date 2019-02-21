import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/about-us">about us</Link>
        </li>
        <li>
          <Link to="/partners">our partners</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
