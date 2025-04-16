import { connectDB } from "@/lib/mongodb";
import Transaction from "@/models/Transaction";

export async function GET() {
  await connectDB();
  const transactions = await Transaction.find().sort({ date: -1 });
  return Response.json(transactions);
}

export async function POST(req) {
  await connectDB();
  const { description, amount, date, category } = await req.json();

  const newTransaction = new Transaction({
    description,
    amount: parseFloat(amount), // ✅ Ensure amount is number
    date,
    category,
  });

  await newTransaction.save();
  return Response.json(newTransaction);
}
