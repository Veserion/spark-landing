import React from 'react';
import styles from './OrderBook.module.css';

interface OrderRowProps {
  amount: string;
  price: string;
  total: string;
  type: 'buy' | 'sell';
}

export const OrderRow: React.FC<OrderRowProps> = ({ amount, price, total, type }) => {
  const rowClass = type === 'buy' ? styles.buyRow : styles.sellRow;
  const priceClass = type === 'buy' ? styles.buyPrice : styles.sellPrice;

  return (
    <div className={`${styles.row} ${rowClass}`}>
      <div className={styles.weakColor} />
      <div className={styles.mediumColor} />
      <div className={styles.amount}>{amount}</div>
      <div className={priceClass}>{price}</div>
      <div className={styles.total}>{total}</div>
    </div>
  );
};