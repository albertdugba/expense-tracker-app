import React, { Component } from "react";

class FormInput extends Component {
  state = {
    date: "",
    category: "Water",
    amount: "",
    description: ""
  };

  handleChange = event => {
    // console.log(event);
    let target = event.target.name;
    let value = event.target.value;
    this.setState({ [target]: value });
    console.log(value);
  };

  handleSubmit = event => {
    event.preventDefault();

    const { date, category, amount, description } = this.state;
    this.props.addInput(date, category, amount, description);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            name="Date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <label htmlFor="Category">Category</label>
          <select
            value={this.state.category}
            onChange={this.handleChange}
            name="Category"
          >
            <optgroup label="Utilities">
              <option value="Light">Light</option>
              <option value="Rent">Rent</option>
              <option value="Water">Water</option>
              <option value="Gas">Gas</option>
              <option value="Tel">Telephone</option>
            </optgroup>

            <optgroup label="Maintenance">
              <option value="Car">Car</option>
              <option value="Fuel">Fuel</option>
            </optgroup>

            <optgroup label="Others">
              <option value="Fees">Fees</option>
              <option value="Food">Food</option>
              <option value="Refreshment">Refreshment</option>
            </optgroup>
          </select>

          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="Amount..."
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Description..."
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button className="mt-3">Add</button>
        </form>
      </div>
    );
  }
}

export default FormInput;
