import React from 'react';
import styled from '@emotion/styled';
import { FeatureCard, FeatureCardProps } from './FeatureCard';
import { SecureTrading } from './SecureTrading';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import IconChartCandle from '../../shared/icons/IconChartCandle';
import IconCoins from '../../shared/icons/IconCoins';
import IconTerminal2 from '../../shared/icons/IconTerminal2';
import IconCheckupList from '../../shared/icons/IconCheckupList';

const RedemptionSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;

    @media screen and (min-width: 1280px) {
        max-width: 1440px;
        width: 100%;
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px) {
        width: 100%;
    }

    @media screen and (min-width: 680px) and (max-width: 1034px) {
        width: 100%;
    }
`;

const SectionHeader = styled.header`
    color: var(--dark-1000, #000);
    text-align: center;
    margin-bottom: 64px;
`;

const MainTitle = styled.h1`
    font: 700 48px var(--Font-Titles, Syne);
`;

const Subtitle = styled.p`
    font: 500 28px var(--Font-Body, Syne);
    margin-top: 8px;
`;

const FeatureCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;

    @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 1fr);
        justify-content: center;
    }
`;

const AdditionalFeature = styled.div<{ isDark: boolean }>`
    border-radius: 16px;
    background-color: ${props => props.isDark ? 'rgba(20, 1, 30, 1)' : 'rgba(236, 231, 255, 1)'};
    border: 4px solid ${props => props.isDark ? 'rgba(25, 5, 78, 1)' : 'rgba(219, 211, 255, 1)'};
    padding: 16px;
    display: flex;
    overflow: hidden;
    color: ${props => props.isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'};

    @media screen and (max-width: 1024px) {
        height: 416px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    position: relative;

    :hover {
        background-color: ${props => props.isDark ? 'rgba(25, 5, 78, 1)' : 'rgba(219, 211, 255, 1)'};
    }
`;

const FeatureContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FeatureTitle = styled.h3`
    font: 700 38px var(--Font-Titles, Syne);
    font-size: 38px;
    margin: 0;

    @media screen and (max-width: 1024px) {
        font-size: 32px;
    }
`;

const FeatureDescription = styled.p`
    font: 400 24px var(--Font-Body, Syne);
`;

const StyledImage = styled(Image)`
    width: 260px;
    object-fit: contain;
`;

const featureCards: FeatureCardProps[] = [
  {
    title: 'On-Chain trading with NO LIMITS.',
    buttonText: 'Trade Now',
    icon: IconChartCandle,
    imageSrc: '/images/permissionless-v2.png',
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
    icon: IconCoins,
    imageSrc: '/images/incentives-v2.png',
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
    icon: IconTerminal2,
    imageSrc: '/images/build-v2.png',
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
    icon: IconCheckupList,
    imageSrc: '/images/list.png',
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
    imageSrc: '/images/composable.png',
  },
  {
    title: 'Bulletproof Infrastructure.',
    description: 'Top indexers, market makers, and Spark data relayers',
    imageSrc: '/images/bulletproof.png',
  },
];

export const RedemptionSection: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <RedemptionSectionContainer>
            <SectionHeader>
                <MainTitle>THE REDEMPTION IS HERE</MainTitle>
                <Subtitle>Get Started Now</Subtitle>
            </SectionHeader>
            <FeatureCardsContainer>
                {featureCards.map((card, index) => (
                    <FeatureCard key={index} {...card} />
                ))}
                {additionalFeatures.map((feature, index) => (
                    <AdditionalFeature key={index} isDark={isDark}>
                        <FeatureContent>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                        </FeatureContent>
                        <StyledImage src={feature.imageSrc} alt="" width={260} height={260} />
                    </AdditionalFeature>
                ))}
            </FeatureCardsContainer>
            <SecureTrading />
        </RedemptionSectionContainer>
    );
};