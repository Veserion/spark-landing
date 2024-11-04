import React from 'react';
import styles from './FeatureCard.module.css';

export interface FeatureCardProps {
  title: string;
  buttonText: string;
  iconSrc: string;
  imageSrc: string;
  backgroundColor: string;
  borderColor: string;
  buttonColor: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  buttonText,
  iconSrc,
  imageSrc,
  backgroundColor,
  borderColor,
  buttonColor,
}) => {
  return (
    <div className={styles.featureCard} style={{ backgroundColor, border: `3px solid ${borderColor}` }}>
      <img src={imageSrc} alt="" className={styles.featureImage} />
      <div className={styles.cardContent}>
        <button className={styles.actionButton} style={{ color: buttonColor }}>
          <img src={iconSrc} alt="" className={styles.buttonIcon} />
          <span>{buttonText}</span>
        </button>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
    </div>
  );
};