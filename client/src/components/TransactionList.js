import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../components/Transaction";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  // console.log(context);
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, [transactions]);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction._id} />
        ))}
      </ul>
    </>
  );
};
