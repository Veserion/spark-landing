import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from "next-themes";
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

const FeatureCardContainer = styled.div<{ isDark: boolean, backgroundColor: string, backgroundColorDark: string, borderColor: string, borderColorDark: string }>`
    flex: 1;
    min-width: 240px;
    min-height: 340px;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    flex-basis: 30%;
    gap: 16px;
    overflow: hidden;
    background-color: ${({ isDark, backgroundColor, backgroundColorDark }) => isDark ? backgroundColorDark : backgroundColor};
    border: 3px solid ${({ isDark, borderColor, borderColorDark }) => isDark ? borderColorDark : borderColor};

    @media screen and (max-width: 1280px) {
        height: 340px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    @media screen and (min-width: 1024px) and (max-width: 1280px) {
        height: 460px;
    }
    @media screen and (max-width: 680px) {
        width: 416px;
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`;

const ActionButton = styled.button<{ isDark: boolean, buttonColor: string, buttonColorDark: string }>`
    border-radius: 100px;
    background-color: ${({ isDark }) => isDark ? 'black' : 'white'};
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    padding: 8px 18px;
    font: 400 24px var(--Font-Body, Syne);
    border: none;
    cursor: pointer;
    width: fit-content;
    color: ${({ isDark, buttonColor, buttonColorDark }) => isDark ? buttonColorDark : buttonColor};
`;

const CardTitle = styled.h2`
    font: 700 38px var(--Font-Titles, Syne);
    font-size: 38px;

    @media screen and (max-width: 1024px) {
        height: 32px;
    }
`;

const FeatureImage = styled.img`
    width: 260px;
    object-fit: contain;
`;

export const FeatureCard: React.FC<FeatureCardProps> = ({
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
    const { theme } = useTheme();
    const isDark = useMemo(() => theme === 'dark', [theme]);

    return (
        <FeatureCardContainer
            isDark={isDark}
            backgroundColor={backgroundColor}
            backgroundColorDark={backgroundColorDark}
            borderColor={borderColor}
            borderColorDark={borderColorDark}
        >
            <CardContent>
                <ActionButton
                    isDark={isDark}
                    buttonColor={buttonColor}
                    buttonColorDark={buttonColorDark}
                >
                    <Image src={'spark.svg'} alt={''} width={24} height={24} />
                    <span>{buttonText}</span>
                </ActionButton>
                <CardTitle>{title}</CardTitle>
            </CardContent>
            <FeatureImage src={imageSrc} alt="" />
        </FeatureCardContainer>
    );
};