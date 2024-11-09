'use client';
import { useTheme } from 'next-themes';
import {
  HeaderWrapper,
  Container,
  LeftSection,
  Nav,
  NavLink,
  RightSection,
  BurgerButton
} from './Header.styles';
import { ThemeToggle } from './ThemeToggle';
import Image from "next/image";
import {useMemo, useState} from "react";
import Link from 'next/link';
import { TradeButton } from '@/app/shared/TradeButton/TradeButton';
import MobileMenu from './MobileMenu';
import SparkLogotype from '@/app/shared/icons/SparkLogotype';

export const Header = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== 'light', [theme]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderWrapper isDark={isDark}>
      <Container isDark={isDark}>
        <LeftSection size="small">
          <Link href="/public" style={{display: 'flex', alignItems: 'center', color: 'inherit'}}>
            <SparkLogotype width="110" height="33" />
          </Link>
          
          <Nav>
            <NavLink href="/learn">Learn</NavLink>
            <NavLink href="/trade">Trade</NavLink>
            <NavLink href="/build">Build</NavLink>
            <NavLink href="/liquidity">Liquidity</NavLink>
          </Nav>
        </LeftSection>

        <RightSection>
          <div className="theme-toggle">
            <ThemeToggle/>
          </div>
          <TradeButton buttonText="Trade Now" size='small'/>
          <BurgerButton onClick={toggleMenu}>
            <Image 
              src="/new-icons/burger-menu.svg" 
              alt="Menu" 
              width={36} 
              height={36}
            />
          </BurgerButton>
        </RightSection>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </Container>
    </HeaderWrapper>
  );
}; 