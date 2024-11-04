import React from 'react';
import styles from './TradingSection.module.css';

interface FeatureItemProps {
  icon: string;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => (
  <div className={styles.featureItem}>
    <div className={styles.featureIcon}>
      <img loading="lazy" src={icon} alt="" className={styles.featureIconImage} />
    </div>
    <div className={styles.featureText}>{text}</div>
  </div>
);

export default FeatureItem;