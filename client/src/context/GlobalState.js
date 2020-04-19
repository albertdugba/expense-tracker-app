import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  transactions: []
};

// Create Context;
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { transactions } = state;

  const addTransactions = transaction => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const deleteTransaction = id => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{ transactions, deleteTransaction, addTransactions }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
