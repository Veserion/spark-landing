import React from 'react';
import styles from './OrderBook.module.css';

export const ActionButtons: React.FC = () => {
  return (
    <div className={styles.buttons}>
      <button className={styles.menuButton} aria-label="Open menu">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/519635d242ee88eee791865927ec75dafb5a820b17efb71e5aae793087c730c4?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" className={styles.buttonIcon} />
      </button>
      <button className={styles.actionButton} aria-label="Action 1">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/149a7cc0d2d3baf906dcb7c1af4fc0474a39e74ad8d70d82e727d0a4cefb55c3?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" className={styles.buttonIcon} />
      </button>
      <button className={styles.actionButton} aria-label="Action 2">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb04810c09d4ca5c80eeebb602d642d193ad202aee3d7b59843c8d757caa81f0?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" className={styles.buttonIcon} />
      </button>
    </div>
  );
};