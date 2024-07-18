import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import { CartProvider } from '../context/CartContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wood Shine',
  description: 'An Ecommerce Demo App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <div className="container">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
