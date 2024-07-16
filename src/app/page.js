import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="container">
      <main className={styles.wrapper}>
        <h1 className={styles.title}>wood shine</h1>
        <p className={styles.lead}>A place for cutting-edge furnitures.</p>
        <Link className="primary-btn" href="/store">
          visit store
        </Link>
      </main>
    </div>
  );
}
