'use client';

import React from 'react';
import { IconCookie } from '@/app/shared/icons/IconCookie';
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
  const [isVisible, setIsVisible] = React.useState(true);
  const {theme} = useTheme();
  const isDark = theme === 'dark';
  const handleAccept = () => {
    setIsVisible(false);
    // Здесь можно добавить логику сохранения согласия в localStorage или cookies
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