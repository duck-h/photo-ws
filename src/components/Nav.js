import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Ho</Link>
        </li>
        <li>
          <Link to="/about">Ho</Link>
        </li>
        <li>
          <Link to="/">Ho</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
