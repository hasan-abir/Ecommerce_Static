'use client';
import Link from 'next/link';
import styles from './Furniture.module.css';
import Image from 'next/image';

export default function Furniture({ furniture }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.picture}>
        <Link href={'/detail/' + furniture.id}>
          <Image
            src={'/' + furniture.img}
            alt={furniture.title}
            width={300}
            height={0}
            priority={true}
            style={{ width: 'auto', height: '110px' }}
          />
        </Link>
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
