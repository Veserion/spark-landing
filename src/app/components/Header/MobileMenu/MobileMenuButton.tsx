import React from 'react';
import {
  StyledMobileMenuButton,
  MobileMenuContent,
  MenuText,
  MobileMenuIcon
} from './styles';

interface MobileMenuButtonProps {
  text: string;
  icon: string;
  isDark?: boolean;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ text, icon, isDark }) => (
  <StyledMobileMenuButton isDark={isDark}>
    <MobileMenuContent>
      <MenuText>{text}</MenuText>
      <MobileMenuIcon src={icon} alt="" />
    </MobileMenuContent>
  </StyledMobileMenuButton>
);

export default MobileMenuButton;