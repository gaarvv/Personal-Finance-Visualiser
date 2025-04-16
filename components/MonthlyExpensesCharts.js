'use client';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function MonthlyExpensesChart() {
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState([]);

  // Fetch transactions and process them for the chart
  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch('/api/transactions');
      const data = await res.json();
      setTransactions(data);
      processChartData(data);
    };

    fetchTransactions();
  }, []);

  // Process data for the bar chart
  const processChartData = (transactions) => {
    const data = transactions.reduce((acc, transaction) => {
      const month = new Date(transaction.date).toLocaleString('default', { month: 'short' });
      if (!acc[month]) acc[month] = 0;
      acc[month] += transaction.amount;
      return acc;
    }, {});

    setChartData(Object.entries(data).map(([month, amount]) => ({ month, amount })));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Monthly Expenses</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
