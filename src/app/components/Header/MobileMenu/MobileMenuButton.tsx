import React from 'react';
import {
  StyledMobileMenuButton,
  MobileMenuContent,
  MenuText,
} from './styles';
import { IconChevronDown } from '@/app/shared';

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
    <IconChevronDown width={16} height={16}/>
  </StyledMobileMenuButton>
);

export default MobileMenuButton;