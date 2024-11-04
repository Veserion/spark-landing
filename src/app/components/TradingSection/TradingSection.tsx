import React from 'react';
import styles from './TradingSection.module.css';
import FeatureItem from './FeatureItem';
import Button from './Button';

const features = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f903dd25f2f610000ed9615adee9d42cb804994bec8983ffe0f7bb00b966004c?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e", text: "Permissionless trading" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f903dd25f2f610000ed9615adee9d42cb804994bec8983ffe0f7bb00b966004c?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e", text: "Superior price discovery" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f903dd25f2f610000ed9615adee9d42cb804994bec8983ffe0f7bb00b966004c?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e", text: "Maximized capital efficiency" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f903dd25f2f610000ed9615adee9d42cb804994bec8983ffe0f7bb00b966004c?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e", text: "Precise risk management" }
];

export const TradingSection: React.FC = () => {
  return (
    <section className={styles.tradingSection}>
      <header className={styles.header}>
        <h1 className={styles.title}>ONCHAIN TRADING IS THE ENDGAME</h1>
        <p className={styles.subtitle}>
          Centralised trading has held crypto back for too long.<br />
          Onchain trading gives individuals full control of their assets.
        </p>
      </header>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f994b689e33920054b1d68021ac70735c68a57cba7ad5a0e8722671900ec77e?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="Trading platform interface" className={styles.mainImage} />
          </div>
          <div className={styles.infoBox}>
            <div className={styles.fuelLogo}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/31bca0a3d7e2bb4c6893e02bb2db0b586caa39d9699142d40112b3d9fb5a70fa?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="Fuel logo" className={styles.fuelLogoImage} />
            </div>
            <p className={styles.fuelDescription}>
              Fuel's cutting-edge execution layer transforms Ethereum rollups, enabling unparalleled scalability, speed, and innovation
            </p>
          </div>
        </div>
        <div className={styles.tradingFreedomCard}>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Unlock Your Trading Freedom</h2>
              <p className={styles.cardSubtitle}>Built for professional traders and institutions:</p>
            </div>
            <ul className={styles.featureList}>
              {features.map((feature, index) => (
                <li key={index}>
                  <FeatureItem icon={feature.icon} text={feature.text} />
                </li>
              ))}
            </ul>
            <div className={styles.buttonContainer}>
              <Button primary icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1eff5225ce4b95e5f7191a2e72de91e9e867922f891e2fb325abd5c2d469aae8?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" text="View Code" />
              <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8c0320253a0df316302f86ae95e9a474c87037b4791d8cf438ae865ffac6cc7e?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" text="Audit Report" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
