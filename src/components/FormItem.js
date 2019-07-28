import React, { Component } from "react";

import "../App.css";
import FormDetails from "./FormDetails";

class FormItem extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div className="container mt-3">
        <div>
          <div className="grid-table">
            <div>Date</div>
            <div>Category</div>
            <div>Amount</div>
            <div>Description</div>
            <div>Action</div>
          </div>

          {expenses.map(expense => (
            <FormDetails
              expense={expense}
              key={expense.id}
              handleDelete={this.props.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FormItem;
