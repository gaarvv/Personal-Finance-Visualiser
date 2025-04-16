// components/BudgetForm.js

"use client";
import React, { useState } from "react";

const BudgetForm = ({ categories, onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [budgetAmount, setBudgetAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!budgetAmount) return;
    
    const res = await fetch("/api/budget", {
      method: "POST",
      body: JSON.stringify({
        category: selectedCategory,
        month: "April", // You can dynamically fetch the current month
        year: new Date().getFullYear(),
        budgetAmount: parseFloat(budgetAmount),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      onSubmit();
      setBudgetAmount("");
    } else {
      alert("Failed to save budget");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Budget Amount:</label>
        <input
          type="number"
          value={budgetAmount}
          onChange={(e) => setBudgetAmount(e.target.value)}
        />
      </div>
      <button type="submit">Set Budget</button>
    </form>
  );
};

export default BudgetForm;
