import React, { Component } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import "../App.css";

class ItemDetail extends Component {
  render() {
    const { date, category, description, amount, total, id } = this.props;

    // onClickHandler = id => {
    //   console.log(id);
    //   this.props.deleteItem(date, category, description, amount);
    // };
    return (
      <div>
        <div className="list-group" key={id}>
          <div>{date}</div>
          <div>{category}</div>
          <div>{description}</div>
          <div>{amount}</div>
          <div>{total}</div>
          <div className="icons" onClick={() => this.onClickHandler(id)}>
            <FaPen className="edit" />
            <FaTrashAlt className="delete" />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
