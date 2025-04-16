'use client';
import { useState } from 'react';
import AddTransactionForm from '@/components/AddTransactionForm';
import TransactionList from '@/components/TransactionList';
import MonthlyExpensesChart from '@/components/MonthlyExpensesCharts';


export default function AddTransactionPage() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <div className="space-y-8 p-4">
      <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>

      {/* Add Transaction Form */}
      <AddTransactionForm onAdd={handleAddTransaction} />

      {/* Monthly Expenses Bar Chart */}
      <MonthlyExpensesChart />

      {/* Transaction List */}
      <TransactionList />
    </div>
  );
}
