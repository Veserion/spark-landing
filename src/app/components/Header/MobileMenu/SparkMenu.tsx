"use client";
import React, { useMemo, useState } from "react";
import MenuButton from "./MenuButton";
import MobileMenuButton from "./MobileMenuButton";
import CallToAction from "./CallToAction";
import { ThemeToggle } from "../ThemeToggle";
import {
  Container,
  MenuSection,
  CallToActionSection,
  FooterSection,
  FooterLogo,
  RootContainer,
} from "./styles";
import { useTheme } from "next-themes";
import SubMenu from "./SubMenu";
import styled from "@emotion/styled";
import { IconSpark } from "@/app/shared/icons";
import { IconTransitionTop } from "@/app/shared/icons";
import { IconCoins } from "@/app/shared/icons";
import { IconArticle } from "@/app/shared/icons";
import { IconInfinity } from "@/app/shared/icons";
import { IconRouteSquare } from "@/app/shared/icons";
import { IconBook2 } from "@/app/shared/icons";
import { IconBrandGithubFilled } from "@/app/shared/icons";
import { IconFireHydrant } from "@/app/shared/icons";

interface SparkMenuProps {
  isDark: boolean;
}

interface MenuItem {
  icon?: React.ReactNode;
  text: string;
  submenu?: Array<{
    icon: React.ReactNode;
    text: string;
    badge?: string;
  }>;
}

const menuItems: MenuItem[] = [
  {
    icon: <IconSpark />,
    text: "What is Spark?",
  },
  {
    icon: <IconTransitionTop />,
    text: "Limit Trading",
  },
  {
    icon: <IconCoins />,
    text: "Provide Liquidity",
  },
];

const mobileMenuItems: MenuItem[] = [
  {
    text: "Learn",
    submenu: [
      {
        icon: <IconSpark />,
        text: "What is Spark?",
      },
      {
        icon: <IconTransitionTop />,
        text: "Trading 101",
      },
      {
        icon: <IconArticle />,
        text: "Blog",
      },
    ],
  },
  {
    text: "Trade",
    submenu: [
      {
        icon: <IconTransitionTop />,
        text: "Limit",
      },
      {
        icon: <IconInfinity />,
        text: "Perpetuals",
        badge: "soon",
      },
      {
        icon: <IconRouteSquare />,
        text: "Swap",
        badge: "soon",
      },
    ],
  },
  {
    text: "Build",
    submenu: [
      {
        icon: <IconBook2 />,
        text: "Docs",
      },
      {
        icon: <IconBrandGithubFilled />,
        text: "Github",
      },
      {
        icon: <IconFireHydrant />,
        text: "Faucet",
      },
    ],
  },
];

const MenuItemContainer = styled.div`
  position: relative;
`;

const SparkMenu: React.FC<SparkMenuProps> = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleMenuClick = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  return (
    <RootContainer isDark={isDark}>
      <Container isDark={isDark}>
        <MenuSection isDark={isDark}>
          {menuItems.map((item, index) => (
            <MenuButton
              key={index}
              icon={item.icon}
              text={item.text}
              isDark={isDark}
            />
          ))}
          {mobileMenuItems.map((item, index) => (
            <MenuItemContainer key={index}>
              <MobileMenuButton
                text={item.text}
                icon={item.icon}
                isDark={isDark}
                onClick={() => handleMenuClick(item.text)}
              />
              {item.submenu && (
                <SubMenu
                  isDark={isDark}
                  isOpen={activeSubmenu === item.text}
                  items={item.submenu}
                />
              )}
            </MenuItemContainer>
          ))}
        </MenuSection>
        <CallToActionSection>
          <CallToAction
            icon={<IconSpark width={36} height={36} />}
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
          <ThemeToggle />
        </FooterSection>
      </Container>
    </RootContainer>
  );
};

export default SparkMenu;
