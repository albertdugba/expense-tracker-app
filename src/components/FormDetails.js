import React, { Component } from "react";

import ItemDetail from "./ItemDetail";
import "../App.css";

class FormDetails extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <div className="expense-list-group ">
          <div>Date</div>
          <div>Category</div>
          <div>Description</div>
          <div>Amount</div>
          <div>Total</div>
        </div>
        {data.map(item => {
          return (
            <ItemDetail
              date={item.date}
              category={item.value}
              description={item.description}
              amount={item.amount}
              total={item.total}
              key={item.id}
            />
          );
        })}
      </div>
    );
  }
}

export default FormDetails;
