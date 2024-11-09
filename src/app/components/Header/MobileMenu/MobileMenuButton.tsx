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
  isDark: boolean;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ text, icon, isDark }) => (
  <StyledMobileMenuButton isDark={isDark}>
    <MobileMenuContent>
      <MenuText isDark={isDark}>{text}</MenuText>
      <MobileMenuIcon src={icon} alt="" isDark={isDark} />
    </MobileMenuContent>
  </StyledMobileMenuButton>
);

export default MobileMenuButton;