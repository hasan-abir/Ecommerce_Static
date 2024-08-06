import Link from 'next/link';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404 - Not found</h1>
      <Link href="/" className="primary-btn">
        Go back to home
      </Link>
    </div>
  );
}
