import React from "react";
import {
  SecureTradingContainer,
  TradingContent,
  TradingVisual,
  TradingInfo,
  TradingTitle,
  TradingDescription,
  ActionArea,
  MobileOptimized,
  MobileIcon,
} from "./SecureTrading.styles";
import Image from "next/image";
import { useTheme } from "next-themes";
import { TradeButton, IconSparkSmallLogo } from "@/shared";

export const SecureTrading: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SecureTradingContainer isDark={isDark}>
      <TradingContent isDark={isDark}>
        <TradingVisual isDark={isDark}>
          <Image
            src={`/images/mobile-${isDark ? "dark" : "light"}.png`}
            alt=""
            width={293}
            height={600}
          />
        </TradingVisual>
        <TradingInfo>
          <TradingTitle>Self Custody and Secure Trading</TradingTitle>
          <TradingDescription>
            Trade securely with full control over your assets. No compromises.
          </TradingDescription>
          <ActionArea>
            <TradeButton
              buttonText="Trade Now"
              icon={<IconSparkSmallLogo />}
              backgroundDark="rgba(103, 67, 238, 1)"
              background="rgba(103, 67, 238, 1)"
            />
            <MobileOptimized>
              <MobileIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/badde8d7d3aebbbce0381d6618b534a8a2d86e51a9224834fda5ee6f64e9ce56?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e"
                alt=""
                width={24}
                height={24}
              />
              <MobileIcon
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/62b6043fcbc421acdffeb5fdb54e31133c4c105907c6f171201d729b7c09a001?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e"
                alt=""
                width={24}
                height={24}
              />
              <span>Mobile optimized</span>
            </MobileOptimized>
          </ActionArea>
        </TradingInfo>
      </TradingContent>
    </SecureTradingContainer>
  );
};
