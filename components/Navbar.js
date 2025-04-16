'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      background: '#0070f3',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <span>💰 Finance Visualizer</span>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/transactions">Transactions</Link>
        <Link href="/add-transaction">Add</Link>
      </div>
    </nav>
  );
}
