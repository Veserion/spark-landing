'use client';
import { useTheme } from 'next-themes';
import {
  HeaderWrapper,
  Container,
  LeftSection,
  Logo,
  Nav,
  NavLink,
  RightSection,
  TradeNowButton
} from './Header.styles';
import { ThemeToggle } from './ThemeToggle';
import Image from "next/image";
import {useMemo} from "react";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = useMemo(() => theme === 'dark', [theme])
  return (
    <HeaderWrapper isDark={isDark}>
      <Container>
        <LeftSection>
          <Logo href="/public" isDark={isDark}>
            <Image src={`/spark-logotype${!isDark ? '-light' : ''}.svg`} alt="Spark" width={110} height={32}/>
          </Logo>
          
          <Nav>
            <NavLink isDark={isDark} href="/learn">Learn</NavLink>
            <NavLink isDark={isDark} href="/trade">Trade</NavLink>
            <NavLink isDark={isDark} href="/build">Build</NavLink>
            <NavLink isDark={isDark} href="/liquidity">Liquidity</NavLink>
          </Nav>
        </LeftSection>

        <RightSection>
          <ThemeToggle/>
          <TradeNowButton href="/trade">
            Trade Now
          </TradeNowButton>
        </RightSection>
      </Container>
    </HeaderWrapper>
  );
}; 