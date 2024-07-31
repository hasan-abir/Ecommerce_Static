'use client';
import Link from 'next/link';
import styles from './Furniture.module.css';
import Image from 'next/image';
import { useCart, useCartDispatch } from '../context/CartContext';

export default function Furniture({ furniture }) {
  const dispatch = useCartDispatch();
  const cart = useCart();

  const isInCart = cart.items.map((item) => item.id).includes(furniture.id);

  const onAddOrRemoveCartItem = () => {
    if (isInCart) {
      dispatch({
        type: 'remove-item',
        action: { id: furniture.id },
      });
    } else {
      dispatch({
        type: 'add-item',
        action: { id: furniture.id },
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.picture}>
        <Image
          src={'/' + furniture.img}
          alt={furniture.title}
          width={300}
          height={0}
          priority={true}
          style={{ width: 'auto', height: '110px' }}
        />
        <Link href={'/detail/' + furniture.id}></Link>
        {isInCart ? (
          <button onClick={onAddOrRemoveCartItem} className={styles.remove}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={onAddOrRemoveCartItem}>Add to Cart</button>
        )}
      </div>
      <div className={styles.text}>
        <h2>
          {furniture.title} <span>{furniture.company}</span>
        </h2>
        <p>
          <span>$</span>
          {furniture.price}
        </p>
      </div>
    </div>
  );
}
