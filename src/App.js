import React, { Component } from "react";

import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";

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
        amount: 0,
        editExpense: false
      }
    ],
    total: 0
  };

  componentDidMount = () => {
    // console.log("updated", this.state);
    const amounts = this.state.expensesItem.map(item => Number(item.amount));
    const total = amounts.reduce((prev, next) => prev + next);
    this.setState({ total });
    // return this.setState({ total });
  };

  // addFormInput = ({ date, category, description, amount, total }) => {
  //   console.log(date);
  //   const newExpenses = {
  //     id: uuid(),
  //     date,
  //     category,
  //     description,
  //     amount,
  //     total: sum
  //   };
  //   console.log(newExpenses);
  //   return this.setState({
  //     expensesItem: [...this.state.expensesItem, newExpenses]
  //   });
  // };

  handleSubmit = (event, data) => {
    event.preventDefault();
    const newState = [...this.state.expensesItem, data];
    const amounts = newState.map(item => Number(item.amount));
    const total = amounts.reduce((prev, next) => prev + next);
    this.setState({ expensesItem: newState, total });
    // console.log(newState);
  };

  handleDelete = (e, id) => {
    // console.log(id);
    const expensesItem = this.state.expensesItem.filter((item, i) => i !== id);
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
    // console.log(this.state);
    const { id } = this.state.expensesItem;
    return (
      <div>
        <Header />
        <FormInput
          // addFormInput={this.addFormInput}
          submit={this.handleSubmit}
        />
        <FormItem
          key={id}
          expenses={this.state.expensesItem}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          total={this.state.total}
        />
      </div>
    );
  }
}

export default App;
