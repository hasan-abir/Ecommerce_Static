import FurnitureList from '../../components/FurnitureList';
import Search from '../../components/Search';
import styles from './page.module.css';

export default function Store() {
  return (
    <main className={styles.wrapper}>
      <h1>Our furnitures</h1>
      <Search />
      <FurnitureList />
    </main>
  );
}
