import styled from "@emotion/styled";
import Link from "next/link";

export const FooterContainer = styled.footer<{ isDark: boolean }>`
  width: 100%;
  background: ${({ isDark }) =>
    isDark
      ? "linear-gradient(135deg, #6b0d97 0%, #000 33%, rgba(107, 13, 151, 0.96) 66%, #000 100%)"
      : "linear-gradient(135deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%)"};
  background-size: 200%;
  padding-top: 4px;
  animation: spark-grad 10s ease infinite;

  @keyframes spark-grad {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }
`;

export const Wrapper = styled.div<{ isDark: boolean }>`
  padding: 48px 32px;
  background: ${({ isDark }) => (isDark ? "#171717" : "#f7f7f7")};
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    row-gap: 16px;
  }
`;

export const List = styled.div`
  display: flex;
`;

export const ListItem = styled(Link)<{ isDark: boolean }>`
  font-weight: 400;
  font-size: 16px;
  color: ${({ isDark }) => (isDark ? "#ffffff" : "#171717")};
  text-decoration: none;

  &:nth-of-type(2) {
    margin-left: 40px;
    margin-right: 30px;
  }
`;

export const Social = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const SocialItem = styled(Link)<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background: ${({ isDark }) => (isDark ? "#ffffff" : "transparent")};
`;

export const Texts = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    row-gap: 16px;
    align-items: center;
  }
`; 