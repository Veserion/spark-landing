import React from 'react';
import styles from './OrderBook.module.css';

interface SpreadProps {
  spread: string;
  percentage: string;
}

export const Spread: React.FC<SpreadProps> = ({ spread, percentage }) => {
  return (
    <div className={styles.spread}>
      <span className={styles.spreadLabel}>Spread</span>
      <span className={styles.spreadValue}>{spread}</span>
      <span className={styles.spreadPercentage}>(+{percentage}%)</span>
    </div>
  );
};