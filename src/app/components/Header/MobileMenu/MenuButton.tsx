import React from 'react';
import { StyledMenuButton, MenuText } from './styles';

interface MenuButtonProps {
  icon: React.ReactNode;
  text: string;
  isDark: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, text, isDark }) => (
  <StyledMenuButton isDark={isDark}>
    {icon}
    <MenuText isDark={isDark}>{text}</MenuText>
  </StyledMenuButton>
);

export default MenuButton;