import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

import "../App.css";

const FormDetails = props => {
  const { date, category, amount, description, id } = props.expense;

  return (
    <div>
      <div className="expense-list-item">
        <div>{date}</div>
        <div>{category}</div>
        <div>{amount}</div>
        <div>{description}</div>
        <div className="icons">
          <FaPen className="edit" onClick={() => props.handleEdit(id)} />
          <FaTrashAlt className="del" onClick={() => props.handleDelete(id)} />
        </div>
      </div>
    </div>
  );
};

export default FormDetails;
