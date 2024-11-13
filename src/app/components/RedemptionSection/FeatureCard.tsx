"use client";
import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import {
  ActionButton,
  BtnsContentWrapper,
  CardContent,
  CardTitle,
  FeatureCardContainer,
  FeatureImage,
  IconArrowRightStyled,
} from "./FeatureCard.styles";

export interface FeatureCardProps {
  title: string;
  buttonText: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  imageSrc: string;
  backgroundColor: string;
  backgroundColorDark: string;
  borderColor: string;
  borderColorDark: string;
  buttonColor: string;
  buttonColorDark: string;
  href: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  buttonText,
  icon: Icon,
  imageSrc,
  backgroundColor,
  backgroundColorDark,
  borderColor,
  borderColorDark,
  buttonColor,
  buttonColorDark,
  href,
}) => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  return (
    <FeatureCardContainer
      isDark={isDark}
      backgroundColor={backgroundColor}
      backgroundColorDark={backgroundColorDark}
      borderColor={borderColor}
      borderColorDark={borderColorDark}
    >
      <FeatureImage src={imageSrc} alt="" />
      <CardContent>
        <ActionButton
          isDark={isDark}
          buttonColor={buttonColor}
          buttonColorDark={buttonColorDark}
        >
          <BtnsContentWrapper
            id="btns-content-wrapper"
            href={href}
            target={href.startsWith("#") ? "_self" : "_blank"}
          >
            <BtnsContentWrapper
              href={href}
              target={href === "/" ? "_self" : "_blank"}
            >
              <Icon />
              <span>{buttonText}</span>
              <IconArrowRightStyled />
            </BtnsContentWrapper>
          </BtnsContentWrapper>
        </ActionButton>
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </FeatureCardContainer>
  );
};
