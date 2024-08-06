import styles from './page.module.css';
import path from 'path';
import fs from 'fs';
import { notFound } from 'next/navigation';
import DetailedFurniture from '../../../components/DetailedFurniture';

export default async function FurnitureDetails({ params: { id } }) {
  const furniture = await getData(id);
  return (
    <main className={styles.wrapper}>
      <DetailedFurniture item={furniture} />
    </main>
  );
}

async function getData(id) {
  const filePath = path.join(process.cwd(), 'src', 'demo_furnitures.json');

  const jsonData = fs.readFileSync(filePath);

  const data = JSON.parse(jsonData);

  const furniture = data.data.find((item) => item.id === id);

  if (!furniture) {
    notFound();
  }

  return furniture;
}
