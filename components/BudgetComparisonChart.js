"use client"; // Add this directive to mark the file as a client component

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BudgetComparisonChart = ({ transactions, budgets }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (transactions && budgets) {
      const categorySpendings = transactions.reduce((acc, transaction) => {
        const category = transaction.category || "Other";
        acc[category] = (acc[category] || 0) + transaction.amount;
        return acc;
      }, {});

      const newChartData = {
        labels: budgets.map((budget) => budget.category),
        datasets: [
          {
            label: "Budgeted Amount",
            data: budgets.map((budget) => budget.budgetAmount),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Actual Spendings",
            data: budgets.map((budget) => categorySpendings[budget.category] || 0),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      };

      setChartData(newChartData);
    }
  }, [transactions, budgets]);

  return (
    <div>
      <h2>Budget vs. Actual Spendings</h2>
      {chartData.labels ? <Bar data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default BudgetComparisonChart;
