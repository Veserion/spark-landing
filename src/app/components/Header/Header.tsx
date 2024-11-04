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
  // ThemeToggle,
  TradeNowButton
} from './Header.styles';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <HeaderWrapper>
      <Container>
        <LeftSection>
          <Logo href="/public">
            <img src="/spark-logotype.svg" alt="Spark" />
          </Logo>
          
          <Nav>
            <NavLink href="/learn">Learn</NavLink>
            <NavLink href="/trade">Trade</NavLink>
            <NavLink href="/build">Build</NavLink>
            <NavLink href="/liquidity">Liquidity</NavLink>
          </Nav>
        </LeftSection>

        <RightSection>
          {/* <ThemeToggle>
            <DarkModeSwitch
              style={{ marginBottom: '2rem' }}
              checked={theme === 'dark'}
              onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              size={24}
            />
          </ThemeToggle> */}
          <ThemeToggle/>
          <TradeNowButton href="/trade">
            Trade Now
          </TradeNowButton>
        </RightSection>
      </Container>
    </HeaderWrapper>
  );
}; 