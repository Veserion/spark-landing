import React from 'react';
import { SecureTradingContainer, TradingContent, TradingVisual, TradingInfo, TradingTitle, TradingDescription, ActionArea, TradeButton, ButtonIcon, MobileOptimized, MobileIcon } from './SecureTrading.styles';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export const SecureTrading: React.FC = () => {
    const {theme} = useTheme();
    const isDark = theme === 'dark';

  return (
    <SecureTradingContainer>
      <TradingContent>
        <TradingVisual>
          <Image src={`/images/mobile-${isDark ? 'dark' : 'light'}.png`} alt="" width={293} height={600} />
        </TradingVisual>
        <TradingInfo>
          <TradingTitle>Self Custody and Secure Trading</TradingTitle>
          <TradingDescription>
            Trade securely with full control over your assets. No compromises.
          </TradingDescription>
          <ActionArea>
            <TradeButton>
              <ButtonIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c28d916fa9c446b1848e6f13c5dfa236fd3cbae4c0d16868cbba4666ac4e012b?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" width={24} height={24} />
              <span>Trade Now</span>
            </TradeButton>
            <MobileOptimized>
              <MobileIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/badde8d7d3aebbbce0381d6618b534a8a2d86e51a9224834fda5ee6f64e9ce56?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" width={24} height={24} />
              <MobileIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/62b6043fcbc421acdffeb5fdb54e31133c4c105907c6f171201d729b7c09a001?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e" alt="" width={24} height={24} />
              <span>Mobile optimized</span>
            </MobileOptimized>
          </ActionArea>
        </TradingInfo>
      </TradingContent>
    </SecureTradingContainer>
  );
};