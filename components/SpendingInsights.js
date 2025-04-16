// components/SpendingInsights.js

const SpendingInsights = ({ transactions, budgets }) => {
    const categorySpendings = transactions.reduce((acc, transaction) => {
      if (!acc[transaction.category]) {
        acc[transaction.category] = 0;
      }
      acc[transaction.category] += transaction.amount;
      return acc;
    }, {});
  
    const insights = budgets.map((budget) => {
      const actual = categorySpendings[budget.category] || 0;
      const difference = actual - budget.budgetAmount;
      const status = difference > 0 ? "Overspent" : "Underspent";
  
      return { category: budget.category, difference, status };
    });
  
    return (
      <div>
        <h2>Spending Insights</h2>
        <ul>
          {insights.map((insight) => (
            <li key={insight.category}>
              {insight.category}: {insight.difference} ({insight.status})
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SpendingInsights;
  