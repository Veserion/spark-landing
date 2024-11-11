import React from 'react';
import { StyledMenuButton, MenuText } from './styles';

interface MenuButtonProps {
  icon: React.ReactNode;
  text: string;
  isDark: boolean;
  href: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, text, isDark, href }) => (
  <StyledMenuButton isDark={isDark} href={href} target="_blank">
    {icon}
    <MenuText isDark={isDark}>{text}</MenuText>
  </StyledMenuButton>
);

export default MenuButton;