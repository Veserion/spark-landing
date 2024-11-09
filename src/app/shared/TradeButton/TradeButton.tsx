import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import {
  TradeButtonContainer,
  BtnsContentWrapper,
  IconArrowRightStyled,
} from "./TradeButton.styles";

interface TradeButtonProps {
  buttonText: string;
  size?: "large" | "small";
  icon: React.ReactNode;
  backgroundDark: string;
  background: string;
}

export const TradeButton: React.FC<TradeButtonProps> = ({
  buttonText,
  size = "large",
  icon,
  backgroundDark,
  background,
}) => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);
  console.log("isDark", isDark);

  return (
    <TradeButtonContainer
      isDark={isDark}
      size={size}
      backgroundDark={backgroundDark}
      background={background}
    >
      <BtnsContentWrapper id="btns-content-wrapper">
        <BtnsContentWrapper>
          {icon}
          <span>{buttonText}</span>
          <IconArrowRightStyled />
        </BtnsContentWrapper>
      </BtnsContentWrapper>
    </TradeButtonContainer>
  );
};
