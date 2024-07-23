'use client';

import { useState } from 'react';
import styles from './Search.module.css';
import { useFurnitureDispatch } from '../context/FurnitureContext';

export default function Search() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const dispatch = useFurnitureDispatch();

  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch({ type: 'fetch', action: { category: selectedCategory } });
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
