import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h1>wood shine</h1>
      <p>A place for cutting-edge furnitures.</p>
      <Link className="primary-btn" href="/store">
        visit store
      </Link>
    </main>
  );
}
