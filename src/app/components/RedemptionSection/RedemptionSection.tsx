import React from 'react';
import styles from './RedemptionSection.module.css';
import { FeatureCard, FeatureCardProps } from './FeatureCard';
import { SecureTrading } from './SecureTrading';

const featureCards: FeatureCardProps[] = [
  {
    title: 'On-Chain trading with NO LIMITS.',
    buttonText: 'Trade Now',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ff1fd81f4ec8c5e335934695f4854e70f96cddb027a9c48f2882f3eee5bb9dae?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/08249255bed6ce5693adda1ad6863befbd0073e0f2d5ee1e432055efca98e862?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
    backgroundColor: 'rgba(255, 247, 242)',
    backgroundColorDark: 'rgba(28, 11, 0)',
    borderColor: 'rgba(255, 225, 206, 1)',
    borderColorDark: 'rgba(42, 16, 0, 1)',
    buttonColor: 'var(--copper-600, #2a1000)',
    buttonColorDark: 'rgba(255, 225, 206, 1)'
  },
  {
    title: 'Earn rewards with Spark incentives.',
    buttonText: 'Provide Liquidity',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14e5a384a0cf74de162a39674f98cfd981d65f87c03825d41d11b40306230ae6?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/564e0352cd567f38f4a1f17f1f73dfe69bc88a892b5a6cd16c1688e93af8e9d9?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
    backgroundColor: 'rgba(239, 252, 255, 1)',
    backgroundColorDark: 'rgba(0, 22, 26, 1)',
    borderColor: 'rgba(191, 242, 252, 1)',
    borderColorDark: 'rgba(0, 47, 56, 1)',
    buttonColor: 'var(--blue-600, #002f38)',
    buttonColorDark: 'rgba(191, 242, 252, 1)'
  },
  {
    title: 'Develop the future dApps of DeFi.',
    buttonText: 'Build Now',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dac83e9b3948284fc9f6f877f658b182fcac773d38e4cb6271484e32db7e8131?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb2865ee1acf721d745a98f7ba1012c92d03108a22a642c59fd835f0da92e836?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
    backgroundColor: 'rgba(244, 255, 236, 1)',
    backgroundColorDark: 'rgba(10, 22, 0, 1)',
    borderColor: 'rgba(196, 255, 196, 1)',
    borderColorDark: 'rgba(0, 39, 0, 1)',
    buttonColor: 'var(--green-600, #002700)',
    buttonColorDark: 'rgba(196, 255, 196, 1)'
  },
  {
    title: 'List any token, even meme coins.',
    buttonText: 'List Assets',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b20ba1435785e1b748616725d69054c73d81f05b23df8044a4d01d4f8cd194b?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2a9475ccc20960a3cf84375b421d6406a1a3e13c04f98ae440f831680dc0356b?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
    backgroundColor: 'rgba(252, 248, 232, 1)',
    backgroundColorDark: 'rgba(35, 28, 1, 1)',
    borderColor: 'rgba(255, 241, 162, 1)',
    borderColorDark: 'rgba(58, 49, 1, 1)',
    buttonColor: 'var(--yellow-600, #3a3101)',
    buttonColorDark: 'rgba(255, 241, 162, 1)',
  },
];

const additionalFeatures = [
  {
    title: 'Composable Ecosystem.',
    description: 'Shared liquidity with other protocols',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f2389a73f5e3c6d5421c1df9ea6b09231873dc66e4ef094ba4fe45a62232ad4c?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
  },
  {
    title: 'Bulletproof Infrastructure.',
    description: 'Top indexers, market makers, and Spark data relayers',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/79126a0abb02a5d2d567a7bbbcc14060548b99e82d5bb10fcf060fed1a3ecc11?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e',
  },
];

export const RedemptionSection: React.FC = () => {
  return (
    <section className={styles.redemptionSection}>
      <header className={styles.sectionHeader}>
        <h1 className={styles.mainTitle}>THE REDEMPTION IS HERE</h1>
        <p className={styles.subtitle}>Get Started Now</p>
      </header>
      <div className={styles.featureCardsContainer}>
        {featureCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
        {additionalFeatures.map((feature, index) => (
            <div key={index} className={styles.additionalFeature}>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
              <img src={feature.imageSrc} alt="" className={styles.featureImage} />
            </div>
        ))}
      </div>
      
      
      {/*<div className={styles.additionalFeaturesContainer}>*/}
      {/*</div>*/}
      <SecureTrading />
    </section>
  );
};