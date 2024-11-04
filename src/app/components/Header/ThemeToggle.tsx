import React from 'react';
import styled from '@emotion/styled';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';

const ToggleContainer = styled.div<{ isActive: boolean }>`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${({ isActive }) => (isActive ? 'black' : 'white')};
`;

const ToggleCircle = styled.div<{ isActive: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${({ isActive }) => (isActive ? 'black' : 'white')};
  border-radius: 50%;
  position: absolute;
  left: ${({ isActive }) => (isActive ? '30px' : '5px')};
  transition: left 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ThemeToggle: React.FC = () => {
const { theme, setTheme } = useTheme();

  return (
    <ToggleContainer onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} isActive={theme === 'dark'}>
      <ToggleCircle isActive={theme === 'dark'}>
      <DarkModeSwitch
        checked={theme === 'dark'}
        size={24}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </ToggleCircle>
    </ToggleContainer>
  );
};
