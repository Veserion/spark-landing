"use client";
/** @jsxImportSource @emotion/react */
import React, { useMemo } from "react";
import styled from "@emotion/styled";
import FeatureItem from "./FeatureItem";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ButtonWithIcon } from "@/app/shared/ButtonWithIcon/ButtonWithIcon";
import {IconBrandGithubFilled} from "@/app/shared/icons/IconBrandGithubFilled";
import {IconHashcloack} from "@/app/shared/icons/IconHashcloack";
import { IconFuel } from "@/app/shared/icons/IconFuel";
import { TIconProps } from "@/app/shared/";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 28px;
  font-weight: 500;
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

const InfoBox = styled.div<{ isDark?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${({ isDark }) =>
    isDark ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"};
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
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const TradingFreedomCard = styled.div<{isDark: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({isDark}) => isDark ? 'var(--Landing-Gradients-holo-dark, linear-gradient(128.85deg, #6B0D97 0%, #000000 33%, rgba(107, 13, 151, 0.956863) 66%, #000000 100%))' :  'linear-gradient(129deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%)'};
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

const CardContent = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  margin: 4px;
  box-sizing: border-box;
  height: calc(100% - 8px);
  width: calc(100% - 8px);
  gap: 24px;
  background-color: ${({isDark}) => isDark ? 'rgba(23, 23, 23, 1)' : 'rgba(255, 255, 255, 1)'};
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
  { text: "Precise risk management" },
];

const WrappedIconHashcloack = styled(IconHashcloack)<TIconProps>`
  color: white;
`;

export const TradingSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);
  return (
    <Section>
      <Header>
        <Title>ONCHAIN TRADING IS THE ENDGAME</Title>
        <Subtitle>
          Centralised trading has held crypto back for too long.
          <br />
          Onchain trading gives individuals full control of their assets.
        </Subtitle>
      </Header>
      <Content>
        <ImageWrapper>
          <ImageContainer>
            <MainImage
              loading="lazy"
              src={"/images/trading-freedom.png"}
              alt="Trading platform interface"
              width={0}
              height={0}
              sizes="100vw"
            />
          </ImageContainer>
          <InfoBox isDark={isDark}>
            <FuelLogo>
              <IconFuel />
            </FuelLogo>
            <FuelDescription>
              Fuel's cutting-edge execution layer transforms Ethereum rollups,
              enabling unparalleled scalability, speed, and innovation
            </FuelDescription>
          </InfoBox>
        </ImageWrapper>
        <TradingFreedomCard isDark={isDark}>
          <CardContent isDark={isDark}>
            <CardHeader>
              <CardTitle>Unlock Your Trading Freedom</CardTitle>
            </CardHeader>
            <CardSubtitle>
              Built for professional traders and institutions:
            </CardSubtitle>
            <FeatureList>
              {features.map((feature, index) => (
                <li key={index}>
                  <FeatureItem text={feature.text} />
                </li>
              ))}
            </FeatureList>
            <ButtonContainer>
              <ButtonWithIcon
                LeftIcon={IconBrandGithubFilled}
                buttonText="View code"
              />
              <ButtonWithIcon
                LeftIcon={WrappedIconHashcloack}
                buttonText="Audit Report"
                backgroundColor="unset"
                borderColor={isDark ? "white" : "black"}
              />
            </ButtonContainer>
          </CardContent>
        </TradingFreedomCard>
      </Content>
    </Section>
  );
};
