import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import FormDetails from "./components/FormDetails";

class App extends Component {
  state = {
    formDetails: [
      {
        date: "",
        value: "",
        description: "",
        amount: "",
        total: null,
        edit: false,
        id: Math.random()
      }
    ]
  };

  addExpenseDetails = (date, value, description, amount, total) => {
    let formValues = {
      date,
      value,
      description,
      amount,
      total
    };

    this.setState({
      formDetails: [...this.state.formDetails, formValues]
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Form addExpenseDetails={this.addExpenseDetails} />
        <FormDetails
          data={this.state.formDetails}
          key={this.state.formDetails.id}
        />
      </div>
    );
  }
}

export default App;
