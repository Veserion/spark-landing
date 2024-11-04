import React from 'react';
import styles from './SecureTrading.module.css';

export const SecureTrading: React.FC = () => {
  return (
    <div className={styles.secureTrading}>
      <div className={styles.tradingContent}>
        <div className={styles.tradingVisual}></div>
        <div className={styles.tradingInfo}>
          <h2 className={styles.tradingTitle}>Self Custody and Secure Trading</h2>
          <p className={styles.tradingDescription}>
            Trade securely with full control over your assets. No compromises.
          </p>
          <div className={styles.actionArea}>
            <button className={styles.tradeButton}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c28d916fa9c446b1848e6f13c5dfa236fd3cbae4c0d16868cbba4666ac4e012b?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" className={styles.buttonIcon} />
              <span>Trade Now</span>
            </button>
            <div className={styles.mobileOptimized}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/badde8d7d3aebbbce0381d6618b534a8a2d86e51a9224834fda5ee6f64e9ce56?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" className={styles.mobileIcon} />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/62b6043fcbc421acdffeb5fdb54e31133c4c105907c6f171201d729b7c09a001?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" className={styles.mobileIcon} />
              <span>Mobile optimized</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};