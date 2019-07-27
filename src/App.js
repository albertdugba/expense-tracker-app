import React, { Component } from "react";
import uuid from "uuid";

import "./App.css";
import FormInput from "./components/FormInput";

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
    console.log(date, category, description, amount);
  };
  render() {
    return (
      <div>
        <FormInput addInput={this.addFormInput} />
      </div>
    );
  }
}

export default App;
