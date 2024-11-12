'use client';
import {useTheme} from 'next-themes';
import Image from 'next/image'
import {
    TradeAssetContainer,
    ContentWrapper,
    Subtitle,
    ImagesContainer,
    Description,
    Title2,
    AnimatedContainer,
    AnimatedTitleWrapper,
    Title,
    StaticTitle,
    Wrapper,
    AnimatedWrapper
} from "@/app/components/TradeAsset/TradeAsset.styled";
import { TradeButton } from '@/app/shared/TradeButton/TradeButton';
import { useMemo } from 'react';

export const TradeAsset = () => {
    const {theme} = useTheme();
    const isDark = useMemo(() => theme !== 'light', [theme]);
    
    return (
        <TradeAssetContainer isDark={isDark}>
            <ContentWrapper>
                <Description isDark={isDark}>
                    The Onchain Trading Rollup
                </Description>
                <Wrapper>
                    <AnimatedWrapper key={isDark ? 'dark' : 'light'}>
                        <AnimatedContainer>
                            <AnimatedTitleWrapper>
                                <Title>TRADE</Title>
                                <Title>LIST</Title>
                            </AnimatedTitleWrapper>
                        </AnimatedContainer>
                        <StaticTitle>ANY ASSET</StaticTitle>
                    </AnimatedWrapper>
                    <Title2>ONCHAIN</Title2>
                </Wrapper>
                <Subtitle>
                    Spark is an Ethereum rollup with an integrated order book, enabling truly decentralized and seamless
                    trading.
                </Subtitle>
                <TradeButton buttonText='Trade Now' />
            </ContentWrapper>
            <ImagesContainer>
                <Image src={`/images/order-book${isDark ? '' : '-light'}.png`} alt={''} width={276} height={556}/>
                <Image src={`/images/order-creation${isDark ? '' : '-light'}.png`} alt={''} width={276} height={556}/>
            </ImagesContainer>
        </TradeAssetContainer>
    );
};