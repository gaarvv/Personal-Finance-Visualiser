"use client"; // Add this directive to mark the file as a client component

import React, { useState, useEffect } from "react";
import AddTransactionForm from "@/components/AddTransactionForm";
import TransactionList from "@/components/TransactionList";
import MonthlyExpensesChart from "@/components/MonthlyExpensesCharts";
import CategoryPieChart from "@/components/CategoryPieChart";
import BudgetComparisonChart from "@/components/BudgetComparisonChart"; // Assuming you've created this component
import SummaryCards from "@/components/SummaryCards"; // Assuming you've created this component

export default function DashboardPage() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  // Fetch transactions from API
  const fetchTransactions = async () => {
    try {
      const res = await fetch("/api/transactions");
      if (!res.ok) {
        throw new Error("Failed to fetch transactions");
      }
      const data = await res.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Fetch budgets from API
  const fetchBudgets = async () => {
    try {
      const res = await fetch("/api/budget");
      if (!res.ok) {
        throw new Error("Failed to fetch budgets");
      }
      const text = await res.text();
      const data = text ? JSON.parse(text) : {}; // Parse JSON only if there's data
      setBudgets(data);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchBudgets();
  }, []);

  return (
    <div className="dashboard">
      <h1>Personal Finance Dashboard</h1>
      <AddTransactionForm onAdd={fetchTransactions} />
      <TransactionList transactions={transactions} />
      <MonthlyExpensesChart transactions={transactions} />
      <CategoryPieChart transactions={transactions} />
      <BudgetComparisonChart transactions={transactions} budgets={budgets} />
      <SummaryCards transactions={transactions} budgets={budgets} />
    </div>
  );
}
