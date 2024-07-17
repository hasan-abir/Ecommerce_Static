import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import CartIcon from './CartIcon';

export default function Navbar() {
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
            <span className={styles.bubble}>2</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
