import React from "react";
import FormDetails from "./FormDetails";

const FormItem = props => {
  const { expenses } = props;
  {
    expenses.map(expense => <FormDetails expense={expense} key={expense.id} />);
  }
  return null;
};

export default FormItem;
