import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <Link className="navbar-item" to="/login">
          <li>Sign in</li>
        </Link>
        <Link className="navbar-item" to="/register">
          <li>Sign up</li>
        </Link>
        <Link className="navbar-item" to="/??">
          <li>??</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
