import React from 'react';
import styles from './subscriptions.module.css';
import { socials } from '@/shared';

export const Subscriptions: React.FC = () => {
  const socialKeys = Object.keys(socials) as (keyof typeof socials)[];

  return (
    <section className={styles.container}>
      <div className={styles.audit}></div>
      <div className={styles.list}>
        <div></div>
        <div>
          <div className={styles.list}>
            {socialKeys.map((key) => {
              const SocialComponent = socials[key];
              return (
                <div key={key} className={styles.item}>
                  <SocialComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};