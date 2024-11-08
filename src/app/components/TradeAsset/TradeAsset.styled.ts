import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Обновленная анимация для вертикального движения контейнера
const slideVertical = keyframes`
  0%, 25% { transform: translateY(0); }
  50%, 75% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
`;

// Анимация для горизонтального движения
const slideHorizontal = keyframes`
  0%, 25% { transform: translateX(0); }
  50%, 75% { transform: translateX(-70px); }
  100% { transform: translateX(0); }
`;

export const AnimatedContainer = styled.div`
    overflow: hidden;
    height: 48px; // Высота одного заголовка
    display: inline-block;
`;

export const AnimatedTitleWrapper = styled.div`
    animation: ${slideVertical} 4s infinite;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
    line-height: 48px;
`;


export const StaticTitle = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin: 0 0 0 15px;
    text-transform: uppercase;
    display: inline-block;
    animation: ${slideHorizontal} 4s infinite;
`;

export const TradeAssetContainer = styled.div<{ isDark: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px;
    margin-top: 100px;

    @media screen and (min-width: 680px) and (max-width: 1034px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ContentWrapper = styled.div`
    max-width: 660px;
    text-align: left;
    gap: 16px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 680px) and (max-width: 1034px) {
        flex-direction: column;
        align-items: center;
        gap: 24px;
        max-width: unset;
    }
`;

export const Description = styled.div<{ isDark: boolean }>`
    font-size: 16px;
    font-weight: 400;
    color: ${({isDark}) => (isDark ? 'rgba(177, 177, 177, 1)' : 'rgba(177, 177, 177, 1)')};
    background-color: ${({isDark}) => (isDark ? 'rgba(23, 23, 23, 1)' : 'rgba(247, 247, 247, 1)')};
    border-radius: 16px;
    padding: 8px 16px;
    width: fit-content;
`

export const Title2 = styled.h1`
    font-size: 90px;
    font-weight: bold;
    margin: 0;
    line-height: 103px;
    text-transform: uppercase;
    font-family: 'Bebas Neue', sans-serif;
`;

export const Subtitle = styled.p`
    font-size: 18px;
    margin: 10px 0 20px;
`;

export const TradeButton = styled.button<{ isDark: boolean }>`
    background-color: rgba(103, 67, 238, 1);
    color: white;
    padding: 10px 24px;
    border: none;
    border-radius: 100px;
    font-weight: normal;
    cursor: pointer;
    transition: background-color 0.3s;
    width: fit-content;
    font-size: 28px;
    line-height: 33.6px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 48px;
    
    @media screen and (max-width: 1024px) {
        
    }
    &:hover {
        background-color: #7A6AFF;
    }
`;

export const ImagesContainer = styled.div`
    display: flex;
    gap: 20px;

    @media screen and (min-width: 1024px) and (max-width: 1280px) {
        > :first-child {
            display: none;
        }
    }
    //@media screen and (min-width: 680px) and (max-width: 1024px) {
    //    height: 460px;
    //}
    //@media screen and (min-width: 680px) and (max-width: 1034px) {
    //    width: 416px;
    //}
`;