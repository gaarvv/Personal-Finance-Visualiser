import './globals.css'; // 🔥 this fixes your issue
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Personal Finance Visualizer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}
