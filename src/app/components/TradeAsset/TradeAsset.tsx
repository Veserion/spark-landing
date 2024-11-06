/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {useTheme} from 'next-themes';
import {OrderBookSection} from './components';
import Image from 'next/image'

const TradeAssetContainer = styled.div<{ isDark: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    margin-top: 100px;
    background-color: ${({isDark}) => (isDark ? '#1A1A1A' : '#FFFFFF')};
    color: ${({isDark}) => (isDark ? '#FFFFFF' : '#000000')};
`;

const ContentWrapper = styled.div`
    max-width: 500px;
    text-align: left;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
`;

const Subtitle = styled.p`
    font-size: 18px;
    margin: 10px 0 20px;
`;

const TradeButton = styled.button<{ isDark: boolean }>`
    background-color: #8A7CFF;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: #7A6AFF;
    }
`;

const ImagesContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const OrderBookImage = styled.div<{ isDark: boolean }>`
    width: 400px;
    height: 500px;
    background-color: ${({isDark}) => (isDark ? '#1E1E1E' : '#F5F5F5')};
    border-radius: 12px;
    border: 1px solid ${({isDark}) => (isDark ? '#333333' : '#E5E5E5')};
`;

const OrderCreationImage = styled.div<{ isDark: boolean }>`
    width: 300px;
    height: 500px;
    background-color: ${({isDark}) => (isDark ? '#1E1E1E' : '#F5F5F5')};
    border-radius: 12px;
    border: 1px solid ${({isDark}) => (isDark ? '#333333' : '#E5E5E5')};
`;

export const TradeAsset = () => {
    const {theme} = useTheme();
    const isDark = theme === 'dark';

    return (
        <TradeAssetContainer isDark={isDark}>
            <ContentWrapper>
                <Title>TRADE ANY ASSET</Title>
                <Subtitle>
                    Spark is an Ethereum rollup with an integrated order book, enabling truly decentralized and seamless
                    trading.
                </Subtitle>
                <TradeButton isDark={isDark}>Trade Now</TradeButton>
            </ContentWrapper>
            {/*<OrderBookSection/>*/}
            <ImagesContainer>
                <Image src={`/images/order-book${!isDark ? '-light' : ''}.png`} alt={''} width={276} height={556}/>
                <Image src={`/images/order-creation${!isDark ? '-light' : ''}.png`} alt={''} width={276} height={556}/>
            </ImagesContainer>
        </TradeAssetContainer>
    );
};