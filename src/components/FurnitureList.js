'use client';

import {
  useFurniture,
  useFurnitureDispatch,
} from '../context/FurnitureContext';
import { useEffect } from 'react';
import Furniture from './Furniture';
import styles from './FurnitureList.module.css';

export default function FurnitureList() {
  const furniture = useFurniture();
  const dispatch = useFurnitureDispatch();

  useEffect(() => {
    dispatch({
      type: 'fetch',
      action: { category: 'all' },
    });
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {furniture.items.map((item) => {
        return <Furniture key={item.id} furniture={item} />;
      })}
    </div>
  );
}
