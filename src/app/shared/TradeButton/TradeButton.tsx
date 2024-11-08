import React, { useMemo } from 'react';
import { useTheme } from "next-themes";
import { TradeButtonContainer, BtnsContentWrapper, IconArrowRightStyled } from './TradeButton.styles';
import IconSparkSmallLogo from '../icons/IconSparkSmallLogo';
interface TradeButtonProps {
    buttonText: string;
}

export const TradeButton: React.FC<TradeButtonProps> = ({
    buttonText,
}) => {
    const { theme } = useTheme();
    const isDark = useMemo(() => theme === 'dark', [theme]);

    return (
        <TradeButtonContainer
            isDark={isDark}
        >
            <BtnsContentWrapper id='btns-content-wrapper'>
                <BtnsContentWrapper>
                    <IconSparkSmallLogo />
                    <span>{buttonText}</span>
                    <IconArrowRightStyled />
                </BtnsContentWrapper>
            </BtnsContentWrapper>
        </TradeButtonContainer>
    );
};
