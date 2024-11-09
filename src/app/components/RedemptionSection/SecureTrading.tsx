'use client';
import React, { useMemo } from 'react';
import { SecureTradingContainer, TradingContent, TradingVisual, TradingInfo, TradingTitle, TradingDescription, ActionArea, MobileOptimized, MobileIcon } from './SecureTrading.styles';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { TradeButton } from '@/app/shared/TradeButton/TradeButton';
import IconApple from '@/app/shared/icons/IconApple';
import IconAndroid from '@/app/shared/icons/IconAndroid';

export const SecureTrading: React.FC = () => {
    const {theme} = useTheme();
    const isDark = useMemo(() => theme !== 'light', [theme]);

  return (
    <SecureTradingContainer isDark={isDark}>
      <TradingContent isDark={isDark}>
        <TradingVisual isDark={isDark}>
          <Image src={`/images/mobile-${isDark ? 'dark' : 'light'}.png`} alt="" width={293} height={600} />
        </TradingVisual>
        <TradingInfo>
          <TradingTitle>Self Custody and Secure Trading</TradingTitle>
          <TradingDescription>
            Trade securely with full control over your assets. No compromises.
          </TradingDescription>
          <ActionArea>
            <TradeButton buttonText='Trade Now' />
            <MobileOptimized isDark={isDark}>
              <IconApple/>
              <IconAndroid/>
              <span>Mobile optimized</span>
            </MobileOptimized>
          </ActionArea>
        </TradingInfo>
      </TradingContent>
    </SecureTradingContainer>
  );
};