"use client"

import styled from '@emotion/styled';
import {Header, TradeAsset} from './components';
import { TradingSection } from './components/TradingSection';
import { RedemptionSection } from './components/RedemptionSection/RedemptionSection';

const RootWrapper = styled.div`
    //display: flex;
    //flex-direction: column;
    //align-items: center;
`
const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 120px;
    width: 100%;
    
    @media screen and (min-width: 1280px) {
        max-width: 1440px;
    }

    @media screen and (min-width: 1024px) {
        padding: 0 48px;
    }

    @media screen and (max-width: 680px) {
        padding: 0 8px;
    }
`
export default function HomePage() {

  return (
    <RootWrapper>
      <Header/>
      <Wrapper>
        <TradeAsset />
        <TradingSection/>
        <RedemptionSection/>

      </Wrapper>
      {/* Другой контент страницы */}
    </RootWrapper>
  );
}
