import React, { Component } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import "../App.css";

class ItemDetail extends Component {
  state = {
    formDetails: [
      {
        date: "",
        value: "",
        description: "",
        amount: "",
        edit: false,
        id: Math.random()
      }
    ]
  };

  render() {
    const { date, category, description, amount, total, id } = this.props;

    return (
      <div>
        <div className="list-group" key={id}>
          <div>{date}</div>
          <div>{category}</div>
          <div>{description}</div>
          <div>{amount}</div>
          <div>{total}</div>
          <div className="icons">
            <FaPen className="edit" />
            <FaTrashAlt className="delete" />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
