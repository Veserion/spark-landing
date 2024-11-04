import React from 'react';
import styles from './OrderBook.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.amountEth}>Amount ETH</div>
      <div className={styles.price}>Price</div>
      <div className={styles.totalUsdc}>Total USDC</div>
    </header>
  );
};