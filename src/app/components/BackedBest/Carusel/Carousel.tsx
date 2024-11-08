import React from 'react';
import styles from './carousel.module.css';
import { logoList } from '@/shared';

export const Carousel: React.FC = () => {
  const logoKeys = Object.keys(logoList) as (keyof typeof logoList)[];

  console.log(logoKeys)

  return (
    <section className={styles.container}>
      <div className={styles.list}>
        {logoKeys.map((key) => {
          const LogoComponent = logoList[key];
          return (
            <div key={key} className={styles.item}>
              <LogoComponent />
            </div>
          );
        })}
      </div>
    </section>
  );
};