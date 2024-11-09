import React, { useEffect, useRef, useMemo } from 'react';
import styled from '@emotion/styled';
import SparkMenu from './SparkMenu';
import { useTheme } from 'next-themes';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 98;
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 72px;
  right: 0;
  max-height: min(100vh - 72px, 700px);
  background: white;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;
  z-index: 99;
  overflow-y: auto;
`;

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== 'light', [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest('.burger-button')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <Overlay 
        className="mobile-menu-overlay" 
        isOpen={isOpen} 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }} 
      />
      <MenuContainer 
        ref={menuRef} 
        isOpen={isOpen} 
        onClick={(e) => e.stopPropagation()}
      >
        <SparkMenu isDark={isDark} />
      </MenuContainer>
    </>
  );
};

export default MobileMenu; 