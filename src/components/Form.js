import React, { Component } from "react";

class Form extends Component {
  state = {
    date: "",
    value: "Travel",
    description: "",
    amount: ""
  };

  // Onchange
  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
    console.log(value);
  };

  // Form Submission
  onSubmit = event => {
    event.preventDefault();
    const { date, value, description, amount } = this.state;
    this.props.addExpenseDetails(date, value, description, amount);

    this.setState({ value: "", description: "", amount: "" });
  };
  render() {
    return (
      <div>
        <h2 className="text-center mt-3">Form</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={this.state.date}
            onChange={this.onChange}
            name="date"
          />

          <label htmlFor="category"> category </label>
          <select
            name="value"
            onChange={this.onChange}
            value={this.state.value}
          >
            <option value={this.state.value}>Travel</option>
            <option value="Food">Food</option>
            <option value="Light">Light</option>
            <option value="Rent">Rent</option>
            <option value="Electricity">Electricity</option>
            <option value="Fees">Fees</option>
            <option value="Loan">Loan</option>
            <option value="Healthcare">Healthcare</option>
          </select>

          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            placeholder="Amount (0.00)"
            onChange={this.onChange}
            value={this.state.amount}
          />
          <label htmlFor="Description">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.onChange}
            value={this.state.description}
          />

          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
