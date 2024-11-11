import styled from "@emotion/styled";

interface ThemeProps {
  isDark: boolean;
}

export const RootContainer = styled.div<{ isDark: boolean }>`
  display: flex;
  width: 100%;
  height: fit-content;
  background: ${({ isDark }) =>
    isDark
      ? "var(--Landing-Gradients-holo-dark, linear-gradient(128.85deg, #6B0D97 0%, #000000 33%, rgba(107, 13, 151, 0.956863) 66%, #000000 100%))"
      : "var(--Landing-Gradients-holo, linear-gradient(129deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%))"};
  animation: gradientAnimation 3s infinite alternate;
  background-size: 200% 200%;
`;

export const Container = styled.nav<ThemeProps>`
  margin-top: 4px;
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  padding: 8px;
  background: ${({ isDark }) => isDark ? 'rgba(20, 20, 20, 1)' : 'rgba(255, 255, 255, 1)'};
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  font-family: "Syne", sans-serif;
  * {
    border: unset;
    font-family: inherit;
  }
`;

export const MenuSection = styled.div<ThemeProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  font-weight: 500;
  font-size: 16px;
`;

export const StyledMenuButton = styled.button<ThemeProps>`
  border-radius: 4px;
  display: flex;
  height: 43px;
  width: 100%;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  padding: 12px;
  margin-top: 8px;
  background: ${({ isDark }) => isDark ? 'rgba(20, 20, 20, 1)' : 'rgba(247, 247, 247, 1)'};
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ isDark }) => (isDark ? "#333333" : "#EFEFEF")};
  }

  &:first-of-type {
    margin-top: 0;
  }
`;

export const MenuIcon = styled.img<ThemeProps>`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  align-self: stretch;
  margin: auto 0;
  filter: ${({ isDark }) => (isDark ? "invert(1)" : "none")};
`;

export const MenuText = styled.span<ThemeProps>`
  align-self: stretch;
  margin: auto 0;
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  margin: 0;
  height: 19px;
  font-size: 16px;
`;

export const StyledMobileMenuButton = styled.button<ThemeProps>`
  display: flex;
  margin-top: 8px;
  width: 100%;
  padding: 0 8px;
  justify-content: space-between;
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1C012A")};
  white-space: nowrap;
  background: transparent;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  align-items: center;
  &:hover {
    background: ${({ isDark }) => isDark ? 'rgba(20, 20, 20, 0.6)' : 'rgba(247, 247, 247, 1)'};
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
`;

export const CallToActionSection = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
`;

export const StyledCallToAction = styled.button`
  border-radius: 8px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  background: #6743ee;
  color: #ffffff;
  font-weight: 400;
  padding: 12px;
  transition: background-color 0.2s ease;

  &:hover {
    background: #5a3bd4;
  }
`;

export const CallToActionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 36px;
  align-self: stretch;
  margin: auto 0;
`;

export const CallToActionContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const CallToActionTitle = styled.div`
  font-size: 16px;
  color: #ffffff;
`;

export const CallToActionSubtitle = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #ffffff;
  opacity: 0.8;
`;

export const FooterSection = styled.footer<ThemeProps>`
  display: flex;
  margin-top: auto;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid
    ${({ isDark }) =>
      isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
`;

export const FooterLogo = styled.img<ThemeProps>`
  aspect-ratio: 4;
  object-fit: contain;
  object-position: center;
  width: 192px;
  filter: ${({ isDark }) => (isDark ? "invert(1)" : "none")};
`;

export const FooterIcon = styled.img`
  aspect-ratio: 1.6;
  object-fit: contain;
  object-position: center;
  width: 64px;
  border-radius: 40px;
`;

export const Social = styled.div`
  display: flex;
`;
