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
    max-width: 1344px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 120px;
    
    @media screen and (min-width: 1280px) {
        max-width: 1440px;
        width: 100%;
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px) {
        width: 1024px;
    }

    @media screen and (max-width: 680px) {
        width: 680px;
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
