"use client"; // Add this directive to mark the file as a client component

import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions && transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <li key={transaction.id || `${transaction.category}-${transaction.amount}-${index}`}>
              <p>Description: {transaction.description}</p>
              <p>Category: {transaction.category}</p>
              <p>Amount: ${transaction.amount}</p>
            </li>
          ))
        ) : (
          <li>No transactions available.</li>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
