"use client"

import styled from '@emotion/styled';
import {Header, TradeAsset} from './components';
import { TradingSection } from './components/TradingSection';
import { RedemptionSection } from './components/RedemptionSection/RedemptionSection';

const Wrapper = styled.div`
  max-width: 1344px;
  width: 100%;
  margin: 0 auto;
`
export default function HomePage() {

  return (
    <>
      <Header/>
      <Wrapper>
        <TradeAsset />
        <TradingSection/>
        <RedemptionSection/>
      </Wrapper>
      {/* Другой контент страницы */}
    </>
  );
}
