import styled from '@emotion/styled';
import { IconArrowRight } from '@/shared';


export const FeatureCardContainer = styled.div<{ isDark: boolean, backgroundColor: string, backgroundColorDark: string, borderColor: string, borderColorDark: string }>`
    flex: 1;
    min-width: 240px;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    gap: 16px;
    overflow: hidden;
    background-color: ${({ isDark, backgroundColor, backgroundColorDark }) => isDark ? backgroundColorDark : backgroundColor};
    border: 3px solid ${({ isDark, borderColor, borderColorDark }) => isDark ? borderColorDark : borderColor};
    :hover {
        background: ${({ isDark, borderColor, borderColorDark }) => isDark ? borderColorDark : borderColor};
        #btns-content-wrapper {
            >div {
                transform: translateX(-30px);
                transition: transform 0.5s ease;
                >svg:first-child {
                    opacity: 0;
                    transition: opacity ease-out 0.5s;
                }
                >svg:last-child {
                    opacity: 1;
                    transition: opacity ease-out 0.5s;
                }
            }
        }
    }
    transition: background 0.5s ease;
    #btns-content-wrapper > div {
        transform: translateX(0);
        transition: transform 0.5s ease;
        >svg:first-child {
            opacity: 1;
            transition: opacity ease-out 0.5s;
        }
        >svg:last-child {
            opacity: 0;
            transition: opacity ease-out 0.5s;
        }
    }
    
    @media screen and (max-width: 1280px) {
        height: 340px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    @media screen and (max-width: 1024px) {
        height: 460px;
        width: 416px;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`;

export const ActionButton = styled.button<{ isDark: boolean, buttonColor: string, buttonColorDark: string }>`
    border-radius: 100px;
    background-color: ${({ isDark }) => isDark ? 'black' : 'white'};
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    padding: 8px 18px;
    font: 400 24px var(--Font-Body, Syne);
    border: none;
    cursor: pointer;
    width: fit-content;
    color: ${({ isDark, buttonColor, buttonColorDark }) => isDark ? buttonColorDark : buttonColor};
    position: relative;
    overflow: hidden;
`;

export const CardTitle = styled.h2`
    font: 700 38px var(--Font-Titles, Syne);
    font-size: 38px;

    @media screen and (max-width: 1024px) {
        height: 32px;
    }
`;

export const FeatureImage = styled.img`
    width: 260px;
    object-fit: contain;
`;

export const IconArrowRightStyled = styled(IconArrowRight)`
    width: 24px;
    height: 24px;
    position: absolute;
    right: -30px;
    opacity: 0;
`;

export const BtnsContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: inherit;
`;