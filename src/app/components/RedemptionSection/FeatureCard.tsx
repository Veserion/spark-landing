import React, {useMemo} from 'react';
import styles from './FeatureCard.module.css';
import {useTheme} from "next-themes";
import Image from "next/image";

export interface FeatureCardProps {
    title: string;
    buttonText: string;
    iconSrc: string;
    imageSrc: string;
    backgroundColor: string;
    backgroundColorDark: string;
    borderColor: string;
    borderColorDark: string;
    buttonColor: string;
    buttonColorDark: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = (
    {
        title,
        buttonText,
        iconSrc,
        imageSrc,
        backgroundColor,
        backgroundColorDark,
        borderColor,
        borderColorDark,
        buttonColor,
        buttonColorDark
    }) => {
    const {theme} = useTheme();
    const isDark = useMemo(() => theme === 'dark', [theme]);

    return (
        <div className={styles.featureCard} style={{
            backgroundColor: isDark ? backgroundColorDark : backgroundColor,
            border: `3px solid ${isDark ? borderColorDark : borderColor}`
        }}>
            <div className={styles.cardContent}>
                <button className={styles.actionButton} style={{
                    color: isDark ? buttonColorDark : buttonColor,
                    backgroundColor: isDark ? 'black' : 'white'
                }}>
                    <Image src={'spark.svg'} alt={''} width={24} height={24}/>

                    <span>{buttonText}</span>
                </button>
                <h2 className={styles.cardTitle}>{title}</h2>
            </div>
            <img src={imageSrc} alt="" className={styles.featureImage}/>
        </div>
    );
};