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
      expensesItem: [...this.state.expensesItem, newExpenses]
    });
  };

  handleDelete = id => {
    const expensesItem = this.state.expensesItem.filter(item => item.id !== id);
    this.setState({ expensesItem });
  };
  render() {
    return (
      <div>
        <FormInput addInput={this.addFormInput} />
        <FormItem
          expenses={this.state.expensesItem}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
