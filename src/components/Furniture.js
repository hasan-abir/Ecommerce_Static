'use client';
import styles from './Furniture.module.css';

export default function Furniture({ furniture }) {
  return (
    <div className={styles.wrapper}>
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
