import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import "../App.css";

const Header = () => {
  return (
    <div className="nav-container">
      <div className="container navBar">
        <FaRegMoneyBillAlt className="logo" />
        <nav className="ul">
          <ul>
            <li> Home</li>
            <li>Add</li>
            <li />
            <li>Total</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
