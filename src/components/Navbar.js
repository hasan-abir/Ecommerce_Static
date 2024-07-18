'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import CartIcon from './CartIcon';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const cart = useCart();

  return (
    <nav className={styles.navbar}>
      <div className={'container ' + styles.wrapper}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            ws.
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="/store">store</Link>
          <Link href="/cart" className="icon">
            <CartIcon />
            {cart.items.length > 0 ? (
              <span className={styles.bubble}>{cart.items.length}</span>
            ) : null}
          </Link>
        </div>
      </div>
    </nav>
  );
}
