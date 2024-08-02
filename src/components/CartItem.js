'use client';

import { useCartDispatch } from '../context/CartContext';
import Image from 'next/image';
import { useFurniture } from '../context/FurnitureContext';
import styles from './CartItem.module.css';
import ChevronRightIcon from './ChevronRightIcon';
import ChevronLeftIcon from './ChevronLeftIcon';
import { useCallback, useMemo } from 'react';

export default function CartItem({ id, quantity }) {
  const furniture = useFurniture();
  const dispatch = useCartDispatch();

  const item = useMemo(() => {
    return furniture.items.find((item) => item.id === id);
  }, [furniture.items]);

  const decrementQuantity = useCallback(() => {
    dispatch({
      type: 'decrement-quantity',
      action: {
        id,
      },
    });
  }, [dispatch]);

  const incrementQuantity = useCallback(() => {
    dispatch({
      type: 'increment-quantity',
      action: {
        maxQuantity: item.quantity,
        id,
      },
    });
  }, [dispatch, item]);

  const removeItemFromCart = useCallback(() => {
    dispatch({
      type: 'remove-item',
      action: {
        id,
      },
    });
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {item ? (
        <>
          <Image
            src={'/' + item.img}
            alt={item.title}
            width={50}
            height={50}
            priority={true}
            style={{ width: 'auto', height: 'auto' }}
          />
          <h4>{item.title}</h4>
          <h3>
            <strong>${item.price}</strong>
          </h3>
          <p>x</p>
          <div className={styles.quantity}>
            <button onClick={decrementQuantity}>
              <ChevronLeftIcon />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
              <ChevronRightIcon />
            </button>
          </div>
          <h3>${quantity * item.price}</h3>
          <button onClick={removeItemFromCart} className={styles.remove}>
            Remove
          </button>
        </>
      ) : null}
    </div>
  );
}
