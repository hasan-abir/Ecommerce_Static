'use client';

import { useFurnitureDispatch } from '../context/FurnitureContext';
import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import styles from './CartList.module.css';

export default function CartList() {
  const cart = useCart();
  const dispatch = useFurnitureDispatch();

  useEffect(() => {
    dispatch({
      type: 'fetch',
      action: {
        category: 'all',
        ids: cart.items.map((item) => item.id),
      },
    });
  }, [dispatch, cart.items]);
  return (
    <div>
      {cart.items.length > 0 ? (
        <>
          <div className={styles.row}>
            <p>-</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>-</p>
            <p>Total</p>
          </div>
          {cart.items.map((item) => {
            return (
              <CartItem key={item.id} id={item.id} quantity={item.quantity} />
            );
          })}
        </>
      ) : null}
    </div>
  );
}
