import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import SparkMenu from './SparkMenu';

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <Overlay isOpen={isOpen} />
      <MenuContainer ref={menuRef} isOpen={isOpen}>
        <SparkMenu />
      </MenuContainer>
    </>
  );
};

export default MobileMenu; 