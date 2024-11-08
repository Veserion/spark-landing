import styled from "@emotion/styled";
import Image from "next/image";
export const SecureTradingContainer = styled.div`
  margin-top: 48px;
  width: 100%;
  border-radius: 20px;
  background: var(--Landing-Gradients-holo, linear-gradient(129deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%));
  padding: 4px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const TradingContent = styled.div`
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  flex-wrap: wrap;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TradingVisual = styled.div`
  flex: 1;
  width: 412px;
  max-width: 412px;
  height: 300px;
  max-height: 300px;
  border-radius: 8px;
  padding: 16px;
  background-color: rgba(246, 246, 246, 1);
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
  color: var(--dark-1000, #000);
  font: 700 38px var(--Font-Titles, Syne);
`;

export const TradingDescription = styled.p`
  color: var(--dark-1000, #000);
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