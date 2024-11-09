import React from 'react';
import { StyledMenuButton, MenuIcon, MenuText } from './styles';

interface MenuButtonProps {
  icon: string;
  text: string;
  isDark: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, text, isDark }) => (
  <StyledMenuButton isDark={isDark}>
    <MenuIcon src={icon} alt="" isDark={isDark}/>
    <MenuText isDark={isDark}>{text}</MenuText>
  </StyledMenuButton>
);

export default MenuButton;