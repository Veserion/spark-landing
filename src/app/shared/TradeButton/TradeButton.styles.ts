import styled from '@emotion/styled';
import IconArrowRight from '../icons/IconArrowRight';

export const TradeButtonContainer = styled.button<{ isDark: boolean }>`
    border-radius: 100px;
    background-color: ${({ isDark }) => isDark ? 'rgba(103, 67, 238, 1)' : 'rgba(103, 67, 238, 1)'};
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    padding: 8px 18px;
    font: 400 24px var(--Font-Body, Syne);
    border: none;
    cursor: pointer;
    color: white;
    position: relative;
    overflow: hidden;
    transition: background 0.5s ease;
    width: fit-content;
    
    :hover {
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
`;

export const BtnsContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: inherit;
`;

export const IconArrowRightStyled = styled(IconArrowRight)`
    width: 24px;
    height: 24px;
    position: absolute;
    right: -30px;
    opacity: 0;
`;