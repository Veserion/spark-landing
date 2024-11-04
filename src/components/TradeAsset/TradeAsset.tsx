/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useTheme } from 'next-themes';

const TradeAssetContainer = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin-top: 100px;
  background-color: ${({ isDark }) => (isDark ? '#1A1A1A' : '#FFFFFF')};
  color: ${({ isDark }) => (isDark ? '#FFFFFF' : '#000000')};
  text-align: center;
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

export const TradeAsset = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <TradeAssetContainer isDark={isDark}>
      <Title>TRADE ANY ASSET</Title>
      <Subtitle>
        Spark is an Ethereum rollup with an integrated order book, enabling truly decentralized and seamless trading.
      </Subtitle>
      <TradeButton isDark={isDark}>Trade Now</TradeButton>
    </TradeAssetContainer>
  );
};