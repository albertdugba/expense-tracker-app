import React, { Component } from "react";
import uuid from "uuid";

import "./App.css";
import FormInput from "./components/FormInput";
import FormItem from "./components/FormItem";
import Header from "./components/Header";

class App extends Component {
  state = {
    expensesItem: [
      {
        id: uuid(),
        date: "",
        category: "",
        description: "",
        amount: [],
        total: null,
        editExpense: false
      }
    ]
  };

  addFormInput = (date, category, description, amount, total) => {
    // let sum = amount.reduce((a, b) => a + b, 0);

    const newExpenses = {
      id: uuid(),
      date,
      category,
      description,
      amount,
      total
    };
    this.setState({
      expensesItem: [...this.state.expensesItem, newExpenses]
    });
  };

  handleDelete = id => {
    const expensesItem = this.state.expensesItem.filter(item => item.id !== id);
    this.setState({ expensesItem });
  };

  handleEdit = id => {
    const items = this.state.expensesItem.filter(item => item.id === id);
    console.log(items);
    this.setState({
      editExpense: true,
      expensesItem: items
    });
  };
  render() {
    return (
      <div>
        <Header />
        <FormInput addInput={this.addFormInput} />
        <FormItem
          total={this.state.expensesItem.total}
          expenses={this.state.expensesItem}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
