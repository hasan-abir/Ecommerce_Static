import CartTotal from '../../components/CartTotal';
import CartList from '../../components/CartList';
import styles from './page.module.css';

export default function Cart() {
  return (
    <main className={styles.wrapper}>
      <h1>Cart</h1>
      <CartList />
      <CartTotal />
    </main>
  );
}
