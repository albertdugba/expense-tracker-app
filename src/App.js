import React, { Component } from "react";
import uuid from "uuid";

import "./App.css";
import FormInput from "./components/FormInput";
import FormItem from "./components/FormItem";

class App extends Component {
  state = {
    expensesItem: [
      {
        id: uuid(),
        date: "",
        category: "",
        description: "",
        amount: "",
        total: ""
      }
    ]
  };

  addFormInput = (date, category, description, amount) => {
    const newExpenses = {
      id: uuid(),
      date,
      category,
      description,
      amount
    };
    this.setState({
      expensesItem: [...this.state, newExpenses]
    });
  };
  render() {
    return (
      <div>
        <FormInput addInput={this.addFormInput} />
        <FormItem expenses={this.state.expensesItem} />
      </div>
    );
  }
}

export default App;
