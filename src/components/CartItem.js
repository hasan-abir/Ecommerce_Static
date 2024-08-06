'use client';

import { useCartDispatch } from '../context/CartContext';
import Image from 'next/image';
import { useFurniture } from '../context/FurnitureContext';
import styles from './CartItem.module.css';
import ChevronRightIcon from './ChevronRightIcon';
import ChevronLeftIcon from './ChevronLeftIcon';
import { useCallback, useMemo } from 'react';
import Link from 'next/link';

export default function CartItem({ id, quantity }) {
  const furniture = useFurniture();
  const dispatch = useCartDispatch();

  const item = useMemo(() => {
    return furniture.items.find((item) => item.id === id);
  }, [furniture.items, id]);

  const decrementQuantity = useCallback(() => {
    dispatch({
      type: 'decrement-quantity',
      action: {
        id,
      },
    });
  }, [dispatch, id]);

  const incrementQuantity = useCallback(() => {
    dispatch({
      type: 'increment-quantity',
      action: {
        maxQuantity: item.quantity,
        id,
      },
    });
  }, [dispatch, item, id]);

  const removeItemFromCart = useCallback(() => {
    dispatch({
      type: 'remove-item',
      action: {
        id,
      },
    });
  }, [dispatch, id]);

  return (
    <div className={styles.wrapper}>
      {item ? (
        <>
          <Link href={'/furniture/' + item.id}>
            <Image
              src={'/' + item.img}
              alt={item.title}
              width={50}
              height={50}
              priority={true}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
          <h4>{item.title}</h4>
          <h3>
            <strong>${item.price}</strong>
          </h3>
          <div className={styles.quantity}>
            <button onClick={decrementQuantity}>
              <ChevronLeftIcon />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
              <ChevronRightIcon />
            </button>
          </div>
          <div>
            <button onClick={removeItemFromCart} className={styles.remove}>
              Remove
            </button>
          </div>
          <h3>${quantity * item.price}</h3>
        </>
      ) : null}
    </div>
  );
}
