import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>copyright by Kat</li>
        <li>
          <Link to="terms-of-use">terms of use</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
