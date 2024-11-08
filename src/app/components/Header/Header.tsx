'use client';
import { useTheme } from 'next-themes';
import {
  HeaderWrapper,
  Container,
  LeftSection,
  Nav,
  NavLink,
  RightSection,
  TradeNowButton
} from './Header.styles';
import { ThemeToggle } from './ThemeToggle';
import Image from "next/image";
import {useMemo} from "react";
import Link from 'next/link';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  return (
    <HeaderWrapper isDark={isDark}>
      <Container isDark={isDark}>
        <LeftSection>
          <Link href="/public">
            <Image src={`/spark-logotype${!isDark ? '-light' : ''}.svg`} alt="Spark" width={110} height={32}/>
          </Link>
          
          <Nav>
            <NavLink href="/learn">Learn</NavLink>
            <NavLink href="/trade">Trade</NavLink>
            <NavLink href="/build">Build</NavLink>
            <NavLink href="/liquidity">Liquidity</NavLink>
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