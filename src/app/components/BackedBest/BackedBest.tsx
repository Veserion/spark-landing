import React from 'react';
import styles from './backedBest.module.css';
import { Carousel } from './Carusel';

export const BackedBest: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>BACKED BY THE BEST</h2>
      <Carousel />
    </section>
  );
};