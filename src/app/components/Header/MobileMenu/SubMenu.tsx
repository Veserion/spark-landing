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
  background: ${({ isDark }) => isDark ? 'rgba(20, 20, 20, 0.6)' : 'rgba(255, 255, 255, 1)'};
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
  gap: 4px;
`;

const Badge = styled.span<{isDark: boolean}>`
  background: ${({isDark}) => isDark ? 'rgba(20, 1, 30, 1)' : 'rgba(246, 246, 246, 1)'};
  width: 34px;
  height: 18px;
  padding: 2px 4px 2px 4px;
  gap: 10px;
  border-radius: 2px;
  opacity: 0px;
  font-size: 12px;
  font-weight: 400; 
  color: rgba(177, 177, 177, 1);
`;

const SubMenuItem = styled.button<{isDark: boolean}>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  width: 100%;
  background: ${({ isDark }) => isDark ? 'rgba(20, 20, 20, 0.6)' : 'rgba(247, 247, 247, 1)'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: inherit;
  box-sizing: border-box;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const MenuText = styled.span`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  height: 19px;
  margin: 0;
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
            <IconWrapper>
              {item.icon}
            </IconWrapper>
            <MenuText>{item.text}</MenuText>
            {item.badge && <Badge isDark={isDark}>{item.badge}</Badge>}
          </SubMenuItem>
        ))}
      </MenuWrapper>
    </SubMenuContainer>
  );
};

export default SubMenu; 