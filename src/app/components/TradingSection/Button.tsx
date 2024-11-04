import React from 'react';
import styles from './TradingSection.module.css';

interface ButtonProps {
  primary?: boolean;
  icon: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ primary = false, icon, text }) => (
  <button className={primary ? styles.primaryButton : styles.secondaryButton}>
    <div className={styles.buttonContent}>
      <img loading="lazy" src={icon} alt="" className={styles.buttonIcon} />
      <span className={styles.buttonText}>{text}</span>
    </div>
  </button>
);

export default Button;