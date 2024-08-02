'use client';

import { useCart, useCartDispatch } from '../context/CartContext';
import { useFurniture } from '../context/FurnitureContext';
import { useCallback, useMemo } from 'react';
import styles from './CartTotal.module.css';

export default function CartTotal() {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const furniture = useFurniture();

  const subtotal = useMemo(() => {
    return cart.items
      .map((item) => {
        const furnitureFound = furniture.items.find(
          (nestedItem) => nestedItem.id === item.id
        );

        if (furnitureFound) {
          return item.quantity * furnitureFound.price;
        } else {
          return 0;
        }
      })
      .reduce((a, b) => a + b, 0);
  }, [cart.items, furniture.items]);

  const tax = useMemo(() => {
    return Math.round(subtotal * 0.1 * 100) / 100;
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal + tax;
  }, [subtotal, tax]);

  const onPurchase = useCallback(() => {
    dispatch({
      type: 'clear-all',
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {cart.items.length > 0 ? (
        <>
          <div className={styles.row}>
            <h3>Subtotal</h3>
            <p>${subtotal}</p>
          </div>
          <div className={styles.row}>
            <h3>Tax</h3>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className={styles.row}>
            <h3>Total</h3>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className={styles.row}>
            <button className="primary-btn" onClick={onPurchase}>
              Purchase
            </button>
          </div>
        </>
      ) : (
        <p>There are no items</p>
      )}
    </div>
  );
}
