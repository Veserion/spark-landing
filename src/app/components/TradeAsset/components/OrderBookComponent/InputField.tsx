import React from 'react';
import styles from './OrderBook.module.css';

export const InputField: React.FC = () => {
  return (
    <div className={styles.input}>
      <label htmlFor="amountInput" className={styles.visuallyHidden}>Enter amount</label>
      <div className={styles.field}>
        <input
          type="text"
          id="amountInput"
          className={styles.amountInput}
          defaultValue="0.01"
          aria-label="Enter amount"
        />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8d99d49e8c6e8bda6e1e2be0f06647a0a91485b0723cd48d55a63f4e9bc87fb?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" className={styles.inputIcon} />
      </div>
    </div>
  );
};