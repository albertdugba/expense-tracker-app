import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0 * -1)
    .toFixed(2);
  return (
    <div className="container">
      <div className="inc-exp-container">
        <div>
          <h4>{income}</h4>
          <p className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>{expense}</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
