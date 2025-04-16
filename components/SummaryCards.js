// components/SummaryCards.js
import React from 'react';

const SummaryCards = ({ transactions }) => {
  // Total expenses calculation
  const totalExpenses = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  // Most recent transaction
  const recentTransaction = transactions[0]; // Assuming transactions are sorted by date (latest first)

  // Category breakdown
  const categoryBreakdown = transactions.reduce((acc, transaction) => {
    if (acc[transaction.category]) {
      acc[transaction.category] += transaction.amount;
    } else {
      acc[transaction.category] = transaction.amount;
    }
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      <div className="card p-4 bg-white shadow-lg">
        <h2 className="text-xl font-semibold">Total Expenses</h2>
        <p className="text-lg">${totalExpenses.toFixed(2)}</p>
      </div>

      <div className="card p-4 bg-white shadow-lg">
        <h2 className="text-xl font-semibold">Most Recent Transaction</h2>
        {recentTransaction ? (
          <div>
            <p>{recentTransaction.description}</p>
            <p>${recentTransaction.amount.toFixed(2)}</p>
          </div>
        ) : (
          <p>No transactions yet.</p>
        )}
      </div>

      <div className="card p-4 bg-white shadow-lg">
        <h2 className="text-xl font-semibold">Category Breakdown</h2>
        <ul>
          {Object.keys(categoryBreakdown).map((category) => (
            <li key={category} className="flex justify-between">
              <span>{category}</span>
              <span>${categoryBreakdown[category].toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryCards;
