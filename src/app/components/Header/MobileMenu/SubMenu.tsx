import React from 'react';
import styled from '@emotion/styled';

interface SubMenuProps {
  isDark: boolean;
  isOpen: boolean;
  items: Array<{
    icon: React.ReactNode;
    text: string;
    badge?: string;
  }>;
}

const SubMenuContainer = styled.div<{ isDark: boolean, isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ isDark }) => isDark ? 'rgba(20, 20, 20, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  transform-origin: top;
  transform: scaleY(${({ isOpen }) => (isOpen ? '1' : '0')});
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')});
  transition: transform 0.2s ease, opacity 0.2s ease;
  z-index: 1000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ isDark }) => isDark 
    ? '0 4px 12px rgba(0, 0, 0, 0.5)' 
    : '0 4px 12px rgba(0, 0, 0, 0.1)'};
`;

const MenuWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Badge = styled.span`
  background: #2D1576;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  margin-left: auto;
`;

const SubMenuItem = styled.button<{isDark: boolean}>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  width: 100%;
  background: ${({ isDark }) => isDark ? 'rgba(20, 20, 20, 0.9)' : 'rgba(247, 247, 247, 1)'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ isDark }) => isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const IconWrapper = styled.div<{isDark: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  img {
    width: 18px;
    height: 18px;
    filter: ${({ isDark }) => isDark ? 'invert(1)' : 'none'};
  }
`;

const MenuText = styled.span<{isDark: boolean}>`
  color: ${({ isDark }) => isDark ? '#FFFFFF' : '#1C012A'};
  font-size: 16px;
  font-weight: 500;
  text-align: left;
`;

const SubMenu: React.FC<SubMenuProps> = ({ isDark, isOpen, items }) => {
  if (!items) {
    return null;
  }

  return (
    <SubMenuContainer isDark={isDark} isOpen={isOpen}>
      <MenuWrapper>
        {items.map((item, index) => (
          <SubMenuItem key={index} isDark={isDark}>
            <IconWrapper isDark={isDark}>
              {item.icon}
            </IconWrapper>
            <MenuText isDark={isDark}>{item.text}</MenuText>
            {item.badge && <Badge>{item.badge}</Badge>}
          </SubMenuItem>
        ))}
      </MenuWrapper>
    </SubMenuContainer>
  );
};

export default SubMenu; 