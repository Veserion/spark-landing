'use client';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useTheme } from 'next-themes';

const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: ${({ theme }) => theme === 'dark' ? '#fff' : '#000'};
    text-decoration: none;
    font-size: 1rem;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme === 'dark' ? '#333' : '#e5e5e5'};
  position: relative;
  border: none;
  cursor: pointer;
  padding: 2px;
`;

const ToggleCircle = styled.div<{ isDark: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ isDark }) => isDark ? '#fff' : '#000'};
  position: absolute;
  transition: transform 0.2s ease;
  transform: translateX(${({ isDark }) => isDark ? '24px' : '0'});
`;

const TradeNowButton = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme === 'dark' ? '#fff' : '#000'};
  color: ${({ theme }) => theme === 'dark' ? '#000' : '#fff'};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <HeaderWrapper>
      <Container>
        <LeftSection>
          <Logo href="/">
            <img src="/spark-logotype.svg" alt="Spark" />
          </Logo>
          
          <Nav theme={theme}>
            <Link href="/learn">Learn</Link>
            <Link href="/trade">Trade</Link>
            <Link href="/build">Build</Link>
            <Link href="/liquidity">Liquidity</Link>
          </Nav>
        </LeftSection>

        <RightSection>
          <ThemeToggle 
            theme={theme}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <ToggleCircle isDark={theme === 'dark'} />
          </ThemeToggle>
          <TradeNowButton href="/trade" theme={theme}>
            Trade Now
          </TradeNowButton>
        </RightSection>
      </Container>
    </HeaderWrapper>
  );
}; 