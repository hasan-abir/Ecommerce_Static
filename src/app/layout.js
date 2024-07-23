import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import { CartProvider } from '../context/CartContext';
import { FurnitureProvider } from '@/context/FurnitureContext';
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Wood Shine',
  description: 'An Ecommerce Demo App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <FurnitureProvider>
          <CartProvider>
            <Navbar />
            <div className="container">{children}</div>
          </CartProvider>
        </FurnitureProvider>
      </body>
    </html>
  );
}
