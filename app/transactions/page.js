import TransactionList from '@/components/TransactionList';

export default function TransactionsPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Transactions</h2>
      <TransactionList />
    </div>
  );
}
