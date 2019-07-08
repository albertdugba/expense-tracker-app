import React, { Component } from "react";
import { FaMoneyCheck } from "react-icons/fa";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>
          {" "}
          <FaMoneyCheck className="logo" />
        </h1>
      </div>
    );
  }
}

export default Navbar;
