import { useTheme } from "next-themes";
import Image from "next/image";
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
  AnimatedWrapper,
} from "@/app/components/TradeAsset/TradeAsset.styled";
import { TradeButton } from "@/shared";
import { IconSparkSmallLogo } from "@/app/shared";

export const TradeAsset = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TradeAssetContainer isDark={isDark}>
      <ContentWrapper>
        <Description isDark={isDark}>The Onchain Trading Rollup</Description>
        <Wrapper>
          <AnimatedWrapper>
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
          Spark is an Ethereum rollup with an integrated order book, enabling
          truly decentralized and seamless trading.
        </Subtitle>
        <TradeButton
          buttonText="Trade Now"
          icon={<IconSparkSmallLogo />}
          backgroundDark="rgba(103, 67, 238, 1)"
          background="rgba(103, 67, 238, 1)"
        />
      </ContentWrapper>
      <ImagesContainer>
        <Image
          src={`/images/order-book${!isDark ? "-light" : ""}.png`}
          alt={""}
          width={276}
          height={556}
        />
        <Image
          src={`/images/order-creation${!isDark ? "-light" : ""}.png`}
          alt={""}
          width={276}
          height={556}
        />
      </ImagesContainer>
    </TradeAssetContainer>
  );
};
