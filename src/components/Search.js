'use client';

import { useState } from 'react';
import styles from './Search.module.css';

export default function Search() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm} className={styles.form}>
      <select
        name="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="bed">Bed</option>
        <option value="chair">Chair</option>
        <option value="table">Table</option>
        <option value="wardrobe">Wardrobe</option>
      </select>
      <button type="submit">Search category</button>
    </form>
  );
}
