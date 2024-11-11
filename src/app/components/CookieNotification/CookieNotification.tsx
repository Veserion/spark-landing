'use client';

import React from 'react';
import {
  NotificationContainer,
  Content,
  Icon,
  ButtonsContainer,
  ConfirmButton,
  DenyButton
} from './styles';
import { useTheme } from 'next-themes';

export const CookieNotification: React.FC = () => {
  let defaultState;
  if (typeof window !== 'undefined') {
    defaultState = localStorage.getItem('cookie_consent') !== 'true';
  };
  const [isVisible, setIsVisible] = React.useState(defaultState);
  const {theme} = useTheme();
  const isDark = theme === 'dark';
  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookie_consent', 'true');
  };

  if (!isVisible) return null;

  return (
    <NotificationContainer isDark={isDark}>
      <Content>
        <Icon />
        <p>
          If you continue browsing, we consider that you have accepted our Cookies Policy
        </p>
      </Content>
      <ButtonsContainer>
        <ConfirmButton onClick={handleAccept}>
          Confirm
        </ConfirmButton>
        <DenyButton onClick={handleAccept} isDark={isDark}>
          Deny
        </DenyButton>
      </ButtonsContainer>
    </NotificationContainer>
  );
}; 