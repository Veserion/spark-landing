"use client";

import styled from "@emotion/styled";
import {
  Header,
  TradeAsset,
  TradingSection,
  RedemptionSection,
  BackedBest,
  Subscriptions,
  Footer,
} from "./components";
import { useTheme } from "next-themes";

const RootWrapper = styled.div`
  width: 100%;
`;
const Main = styled.div`
  max-width: 1440px;
  width: 100%;
  padding-right: 50px;
  padding-left: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 120px;

    @media screen and (max-width: 1280px) {
      max-width: 1280px;
      padding-right: 48px;
      padding-left: 48px;
      gap: 80px;
    }

    @media screen and (max-width: 680px) {
      max-width: 680px;
      padding-right: 8px;
      padding-left: 8px;
      gap: 64px;
    }
`

export default function HomePage() {
  const { theme, setTheme } = useTheme();
setTheme(localStorage.getItem('theme') || 'dark');
  return (
    <RootWrapper>
      <Header />
      <Main>
        <TradeAsset />
        <TradingSection />
        <RedemptionSection />
      </Main>
      <BackedBest />
      <Main>
        <Subscriptions />
      </Main>
      <Footer />
    </RootWrapper>
  );
}
