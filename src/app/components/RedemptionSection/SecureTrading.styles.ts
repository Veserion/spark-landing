import styled from "@emotion/styled";
import Image from "next/image";
export const SecureTradingContainer = styled.div<{isDark: boolean}>`
  margin-top: 48px;
  width: 100%;
  border-radius: 20px;
  background: ${({isDark}) => isDark ? 'var(--Landing-Gradients-holo-dark, linear-gradient(128.85deg, #6B0D97 0%, #000000 33%, rgba(107, 13, 151, 0.956863) 66%, #000000 100%))' : 'var(--Landing-Gradients-holo, linear-gradient(129deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%))'};
  padding: 4px;
  animation: gradientAnimation 5s infinite alternate;

  @media (max-width: 991px) {
    margin-top: 40px;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  background-size: 200% 200%;
`;

export const TradingContent = styled.div<{isDark: boolean}>`
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: ${({isDark}) => isDark ? 'black' : 'white'};
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TradingVisual = styled.div<{isDark: boolean}>`
  flex: 1;
  width: 412px;
  max-width: 412px;
  height: 300px;
  max-height: 300px;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({isDark}) => isDark ? 'rgba(23, 23, 23, 1)' : 'rgba(246, 246, 246, 1)'};
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;  
  overflow: hidden;

  @media (max-width: 1280px) {
    width: 340px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const TradingInfo = styled.div`
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const TradingTitle = styled.h2`
  font: 700 38px var(--Font-Titles, Syne);
`;

export const TradingDescription = styled.p`
  margin-top: 32px;
  font: 400 24px var(--Font-Body, Syne);
`;

export const ActionArea = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 16px;
`;

export const TradeButton = styled.button`
  border-radius: 100px;
  background-color: rgba(103, 67, 238, 1);
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--light, #fff);
  padding: 8px 16px;
  font: 400 24px var(--Font-Body, Syne);
  border: none;
  cursor: pointer;
`;

export const ButtonIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const MobileOptimized = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 32px;
  border: 1px dashed rgba(0, 0, 0, 1);
  border-radius: 8px;

  @media (max-width: 991px) {
    padding: 8px 20px;
  }
`;

export const MobileIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;