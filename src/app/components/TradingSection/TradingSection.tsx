/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import FeatureItem from './FeatureItem';
import Button from './Button';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  gap: 8px
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: var(--dark-1000, #000);
`;

const Subtitle = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: var(--dark-1000, #000);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 680px) {
    gap: 24px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: fit-content;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: unset;
    max-height: 576px;
    overflow: hidden;
  }
  @media screen and (max-width: 680px) {
    max-height: 320px;
    overflow: hidden;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const MainImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  style={{ width: '100%', height: 'auto' }}
  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: unset;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(219, 211, 255, 1);
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 680px) {
    width: 100%;
    padding: 16px;
  }
`;

const FuelLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 12px;
  border-right: 1px solid rgba(219, 211, 255, 1);
  @media screen and (max-width: 680px) {
    border-right: none;
  }
`;

const FuelLogoImage = styled.img`
  width: 169px;
  height: auto;
  object-fit: contain;
`;

const FuelDescription = styled.p`
  margin-left: 12px;
  font-size: 16px;
  color: var(--dark-1000, #000);
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const TradingFreedomCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--Landing-Gradients-holo, linear-gradient(129deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%));
  animation: gradientAnimation 3s infinite alternate;
  border-radius: 20px;
  box-sizing: border-box;
  width: 50%;
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  background-size: 200% 200%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const CardContent = styled.div<{ isDark?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  margin: 4px;
  box-sizing: border-box;
  height: calc(100% - 8px);
  width: calc(100% - 8px);
  gap: 24px;
  background-color: ${({isDark}) => isDark ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'};
  border-radius: 16px;
  @media screen and (max-width: 680px) {
    padding: 16px;
    gap: 24px;
  }
`;

const CardHeader = styled.div`
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 54px;
  font-weight: 700;
  @media screen and (max-width: 680px) {
    font-size: 32px;
  }
`;

const CardSubtitle = styled.p`
  font-size: 24px;
  @media screen and (max-width: 680px) {
    font-size: 16px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  width: 100%;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    font-size: 16px;
    margin-top: 8px;
  }
`;

const features = [
  { text: "Permissionless trading" },
  { text: "Superior price discovery" },
  { text: "Maximized capital efficiency" },
  { text: "Precise risk management" }
];

export const TradingSection: React.FC = () => {
    const {theme} = useTheme();
    const isDark = theme === 'dark';
  return (
    <Section>
      <Header>
        <Title>ONCHAIN TRADING IS THE ENDGAME</Title>
        <Subtitle>
          Centralised trading has held crypto back for too long.<br />
          Onchain trading gives individuals full control of their assets.
        </Subtitle>
      </Header>
      <Content>
        <ImageWrapper>
          <ImageContainer>
            <MainImage loading="lazy" src={'/images/trading-freedom.png'} alt="Trading platform interface" width={0} height={0} sizes="100vw"            />
          </ImageContainer>
          <InfoBox>
            <FuelLogo>
              <FuelLogoImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/31bca0a3d7e2bb4c6893e02bb2db0b586caa39d9699142d40112b3d9fb5a70fa?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="Fuel logo" />
            </FuelLogo>
            <FuelDescription>
              Fuel's cutting-edge execution layer transforms Ethereum rollups, enabling unparalleled scalability, speed, and innovation
            </FuelDescription>
          </InfoBox>
        </ImageWrapper>
        <TradingFreedomCard>
          <CardContent isDark={isDark}>
            <CardHeader>
              <CardTitle>Unlock Your Trading Freedom</CardTitle>
            </CardHeader>
              <CardSubtitle>Built for professional traders and institutions:</CardSubtitle>
            <FeatureList>
              {features.map((feature, index) => (
                <li key={index}>
                  <FeatureItem text={feature.text} />
                </li>
              ))}
            </FeatureList>
            <ButtonContainer>
              <Button primary icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1eff5225ce4b95e5f7191a2e72de91e9e867922f891e2fb325abd5c2d469aae8?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" text="View Code" />
              <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8c0320253a0df316302f86ae95e9a474c87037b4791d8cf438ae865ffac6cc7e?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" text="Audit Report" />
            </ButtonContainer>
          </CardContent>
        </TradingFreedomCard>
      </Content>
    </Section>
  );
};
