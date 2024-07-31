'use client';

import { useCartDispatch } from '@/context/CartContext';
import Image from 'next/image';
import { useFurniture } from '../context/FurnitureContext';
import styles from './CartItem.module.css';
import ChevronRightIcon from './ChevronRightIcon';
import ChevronLeftIcon from './ChevronLeftIcon';

export default function CartItem({ id, quantity }) {
  const furniture = useFurniture();
  const dispatch = useCartDispatch();

  const item = furniture.items.find((item) => item.id === id);

  const decrementQuantity = () => {
    dispatch({
      type: 'decrement-quantity',
      action: {
        id,
      },
    });
  };

  const incrementQuantity = () => {
    dispatch({
      type: 'increment-quantity',
      action: {
        maxQuantity: item.quantity,
        id,
      },
    });
  };

  const removeItemFromCart = () => {
    dispatch({
      type: 'remove-item',
      action: {
        id,
      },
    });
  };

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
