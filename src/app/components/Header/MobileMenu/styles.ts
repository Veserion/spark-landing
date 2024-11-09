import styled from '@emotion/styled';

interface ThemeProps {
  isDark: boolean;
}

export const Container = styled.nav<ThemeProps>`
  display: flex;
  max-width: 320px;
  flex-direction: column;
  overflow: hidden;
  padding: 8px;
  background: ${({ isDark }) => isDark ? '#1A1A1A' : '#FFFFFF'};
  color: ${({ isDark }) => isDark ? '#FFFFFF' : '#1C012A'};
`;

export const MenuSection = styled.div<ThemeProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${({ isDark }) => isDark ? '#FFFFFF' : '#1C012A'};
  font: 400 16px var(--Font-Body, Syne);
`;

export const StyledMenuButton = styled.button<ThemeProps>`
  border-radius: 4px;
  display: flex;
  min-height: 43px;
  width: 100%;
  align-items: center;
  gap: 4px;
  justify-content: flex-start;
  padding: 12px;
  margin-top: 8px;
  background: ${({ isDark }) => isDark ? '#2A2A2A' : '#F7F7F7'};
  color: ${({ isDark }) => isDark ? '#FFFFFF' : '#1C012A'};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ isDark }) => isDark ? '#333333' : '#EFEFEF'};
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
  filter: ${({ isDark }) => isDark ? 'invert(1)' : 'none'};
`;

export const MenuText = styled.span<ThemeProps>`
  align-self: stretch;
  margin: auto 0;
  color: ${({ isDark }) => isDark ? '#FFFFFF' : '#1C012A'};
`;

export const StyledMobileMenuButton = styled.button<ThemeProps>`
  display: flex;
  margin-top: 8px;
  width: 100%;
  flex-direction: column;
  color: ${({ isDark }) => isDark ? '#FFFFFF' : '#1C012A'};
  white-space: nowrap;
  background: ${({ isDark }) => isDark ? '#2A2A2A' : '#F7F7F7'};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ isDark }) => isDark ? '#333333' : '#EFEFEF'};
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const MobileMenuIcon = styled.img<ThemeProps>`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  align-self: stretch;
  margin: auto 0;
  filter: ${({ isDark }) => isDark ? 'invert(1)' : 'none'};
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
  font-family: var(--Font-Body, Syne);
  background: #6743EE;
  color: #FFFFFF;
  font-weight: 400;
  padding: 12px;
  transition: background-color 0.2s ease;

  &:hover {
    background: #5A3BD4;
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
  color: #FFFFFF;
`;

export const CallToActionSubtitle = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #FFFFFF;
  opacity: 0.8;
`;

export const FooterSection = styled.footer<ThemeProps>`
  display: flex;
  margin-top: 8px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid ${({ isDark }) => isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
`;

export const FooterLogo = styled.img<ThemeProps>`
  aspect-ratio: 4;
  object-fit: contain;
  object-position: center;
  width: 192px;
  filter: ${({ isDark }) => isDark ? 'invert(1)' : 'none'};
`;

export const FooterIcon = styled.img`
  aspect-ratio: 1.6;
  object-fit: contain;
  object-position: center;
  width: 64px;
  border-radius: 40px;
`;