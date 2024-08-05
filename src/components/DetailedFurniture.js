'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCart, useCartDispatch } from '../context/CartContext';
import { useFurnitureDispatch } from '../context/FurnitureContext';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';
import styles from './DetailedFurniture.module.css';

export default function DetailedFurniture({ item }) {
  const [quantity, setQuantity] = useState(1);

  const cartDispatch = useCartDispatch();
  const furnitureDispatch = useFurnitureDispatch();
  const cart = useCart();

  const isInCart = useMemo(() => {
    return cart.items.map((cartItem) => cartItem.id).includes(item.id);
  }, [cart.items, item.id]);

  const changeQuantity = useCallback(
    (add) => {
      if (add && item && quantity < item.quantity) {
        setQuantity(quantity + 1);
      } else if (item && quantity > 1) {
        setQuantity(quantity - 1);
      }
    },
    [item, quantity]
  );

  const onAddOrRemoveCartItem = useCallback(() => {
    if (isInCart) {
      cartDispatch({
        type: 'remove-item',
        action: { id: item.id },
      });
    } else {
      cartDispatch({
        type: 'add-item',
        action: { id: item.id, quantity },
      });
    }
  }, [quantity, cartDispatch, isInCart, item.id]);

  useEffect(() => {
    furnitureDispatch({
      type: 'fetch',
      action: {
        category: 'all',
        ids: [item.id],
      },
    });
  }, [furnitureDispatch, item.id]);
  return (
    <div className={styles.wrapper}>
      {item ? (
        <>
          <h1>{item.title}</h1>

          <div className={styles.row}>
            <aside>
              <Image
                src={'/' + item.img}
                alt={item.title}
                width={800}
                height={0}
                priority={true}
                style={{ width: '100%', height: '300px', objectFit: 'contain' }}
              />
            </aside>
            <section>
              <h2>Price</h2>
              <p className={styles.price}>${item.price}</p>
              {isInCart ? null : (
                <>
                  <h2>Quantity</h2>
                  <div className={styles.quantity}>
                    <button onClick={() => changeQuantity()}>
                      <ChevronLeftIcon />
                    </button>
                    <span>
                      {quantity}/{item.quantity}
                    </span>
                    <button onClick={() => changeQuantity(true)}>
                      <ChevronRightIcon />
                    </button>
                  </div>
                </>
              )}
              <button className="primary-btn" onClick={onAddOrRemoveCartItem}>
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
              </button>
              <h2>Bio by {item.company}</h2>
              <p>{item.description}</p>
            </section>
          </div>
        </>
      ) : (
        <p>Furniture not found</p>
      )}
    </div>
  );
}
