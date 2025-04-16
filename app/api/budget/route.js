// app/api/budget/route.js

// This is a mock function to represent the actual logic to fetch budgets from your database
const fetchBudgetsFromDatabase = async () => {
    // Replace with your actual database fetching logic
    return [
      { category: "Food", budgetAmount: 500 },
      { category: "Transportation", budgetAmount: 200 },
      { category: "Entertainment", budgetAmount: 150 },
    ];
  };
  
  export async function GET() {
    try {
      const budgets = await fetchBudgetsFromDatabase();
  
      if (!budgets || budgets.length === 0) {
        return new Response(
          JSON.stringify({ error: "No budgets found" }),
          { status: 404 }
        );
      }
  
      return new Response(JSON.stringify(budgets), { status: 200 });
    } catch (error) {
      console.error("Error fetching budgets:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch budgets" }),
        { status: 500 }
      );
    }
  }
  