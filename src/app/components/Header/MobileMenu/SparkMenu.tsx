'use client';
import React, { useMemo } from 'react';
import MenuButton from './MenuButton';
import MobileMenuButton from './MobileMenuButton';
import CallToAction from './CallToAction';
import { ThemeToggle } from '../ThemeToggle';
import {
  Container,
  MenuSection,
  CallToActionSection,
  FooterSection,
  FooterLogo,
  FooterIcon
} from './styles';
import { useTheme } from 'next-themes';

interface SparkMenuProps {
  isDark?: boolean;
}

interface MenuItem {
  icon: string;
  text: string;
}

const menuItems: MenuItem[] = [
  { 
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a8bf21616b804709c334e2dfbe036a25c165fd38c24f77b414af72553f4b9092?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e', 
    text: 'What is Spark?' 
  },
  { 
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8576cb0e753b45b93ad06e37db018265e4b12cfd8d86c859e521dfdfaa0ed980?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e', 
    text: 'Limit Trading' 
  },
  { 
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dc2cf341e6ab837066122c5d3d3418ad53e0f22f295dcd2f9a654298ed5322f4?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e', 
    text: 'Provide Liquidity' 
  },
];

const mobileMenuItems: MenuItem[] = [
  { 
    text: 'Learn', 
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30ad8e81b9391286a81c4bd53ac2431c5ea605dfae62c8cdc10a0c3063612b4a?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e' 
  },
  { 
    text: 'Trade', 
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30ad8e81b9391286a81c4bd53ac2431c5ea605dfae62c8cdc10a0c3063612b4a?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e' 
  },
  { 
    text: 'Build', 
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30ad8e81b9391286a81c4bd53ac2431c5ea605dfae62c8cdc10a0c3063612b4a?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e' 
  },
];

const SparkMenu: React.FC<SparkMenuProps> = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== 'light', [theme]);
  return (
    <Container isDark={isDark}>
      <MenuSection isDark={isDark}>
        {menuItems.map((item, index) => (
          <MenuButton key={index} icon={item.icon} text={item.text} isDark={isDark} />
        ))}
        {mobileMenuItems.map((item, index) => (
          <MobileMenuButton key={index} text={item.text} icon={item.icon} isDark={isDark} />
        ))}
        <div style={{ padding: '12px' }}>
          <ThemeToggle />
        </div>
      </MenuSection>
      <CallToActionSection>
        <CallToAction
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5927fc4171e1c4b7e8f4a66e166298171acf7b20954d9259aa6469c6a0f500ec?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e"
          title="Spark is Mobile Optimized"
          subtitle="Start trading now"
        />
      </CallToActionSection>
      <FooterSection isDark={isDark}>
        <FooterLogo
          isDark={isDark}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07c7c98615be0d34bb342a151eba79129b2e6dfc7981c9aacfcf55498e119cbf?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e"
          alt="Spark logo"
        />
        <FooterIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32dc525176f621bcc0866a101fe7e6b4d7bf625eb42324956e076d23e0b7688b?placeholderIfAbsent=true&apiKey=d71fd82e899c4d0ead14fb5fda16d23e"
          alt="User avatar"
        />
      </FooterSection>
    </Container>
  );
};

export default SparkMenu;