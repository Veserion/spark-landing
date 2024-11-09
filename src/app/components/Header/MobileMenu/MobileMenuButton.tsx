import React from 'react';
import {
  StyledMobileMenuButton,
  MobileMenuContent,
  MenuText,
} from './styles';

interface MobileMenuButtonProps {
  text: string;
  icon: React.ReactNode;
  isDark: boolean;
  onClick?: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ 
  text, 
  icon, 
  isDark,
  onClick 
}) => (
  <StyledMobileMenuButton isDark={isDark} onClick={onClick}>
    <MobileMenuContent>
      <MenuText isDark={isDark}>{text}</MenuText>
      {icon}
    </MobileMenuContent>
  </StyledMobileMenuButton>
);

export default MobileMenuButton;