import React, { useMemo } from 'react';
import { useTheme } from "next-themes";
import { ActionButton, BtnsContentWrapper, CardContent, CardTitle, FeatureCardContainer, FeatureImage, IconArrowRightStyled } from './FeatureCard.styles';

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
    buttonColorDark
}) => {
    const { theme } = useTheme();
    const isDark = useMemo(() => theme === 'dark', [theme]);

    return (
        <FeatureCardContainer
            isDark={isDark}
            backgroundColor={backgroundColor}
            backgroundColorDark={backgroundColorDark}
            borderColor={borderColor}
            borderColorDark={borderColorDark}
        >
            <CardContent>
                <ActionButton
                    isDark={isDark}
                    buttonColor={buttonColor}
                    buttonColorDark={buttonColorDark}
                >
                    <BtnsContentWrapper id='btns-content-wrapper'>
                        <BtnsContentWrapper>
                            <Icon/>
                            <span>{buttonText}</span>
                            <IconArrowRightStyled />
                        </BtnsContentWrapper>
                    </BtnsContentWrapper>
                </ActionButton>
                <CardTitle>{title}</CardTitle>
            </CardContent>
            <FeatureImage src={imageSrc} alt="" />
        </FeatureCardContainer>
    );
};