import React, { useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import SparkMenu from './SparkMenu';
import { useTheme } from 'next-themes';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  z-index: 998;
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

const Background = styled.div<{ isOpen: boolean, isDark: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ isDark }) => isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
  opacity: ${({ isOpen }) => (isOpen ? 0.5 : 0)};
  transition: opacity 0.6s ease;
  z-index: 999;
  pointer-events: none;
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - 72px);
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 0.6s ease;
  z-index: 1000;
  overflow-y: auto;
  will-change: transform;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== 'light', [theme]);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
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

  const menuContent = (
    <>
      <Overlay 
        className="mobile-menu-overlay" 
        isOpen={isOpen} 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }} 
      />
      <Background isOpen={isOpen} isDark={isDark} />
      <MenuContainer 
        ref={menuRef} 
        isOpen={isOpen} 
        onClick={(e) => e.stopPropagation()}
      >
        <SparkMenu isDark={isDark} />
      </MenuContainer>
    </>
  );

  if (!mounted) return null;

  const portalElement = document.getElementById('portal-root');
  if (!portalElement) return null;

  return createPortal(menuContent, portalElement);
};

export default MobileMenu;