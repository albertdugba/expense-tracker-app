import React, { Component } from "react";

import "../App.css";
import FormDetails from "./FormDetails";

class FormItem extends Component {
  render() {
    const { expenses, total } = this.props;
    // console.log(total);
    return (
      <div className="container mt-3">
        <div className="table-container">
          <div className="grid-table">
            <div>Date</div>
            <div>Category</div>
            <div>Amount</div>
            <div>Description</div>
            <div>Action</div>
          </div>

          {expenses.map((expense, i) => (
            <FormDetails
              expense={expense}
              key={i}
              handleDelete={e => this.props.handleDelete(e, i)}
              handleEdit={this.props.handleEdit}
            />
          ))}
          <strong>Total:{total}</strong>
        </div>
      </div>
    );
  }
}

export default FormItem;
