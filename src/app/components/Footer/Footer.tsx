"use client";
import { useTheme } from "next-themes";
import { useMemo, useState } from "react";
import Link from "next/link";
import { socialListFooter } from "@/helpers";
import { TIconProps } from "@/shared";
import {
  FooterContainer,
  Wrapper,
  Info,
  List,
  ListItem,
  Social,
  SocialItem,
  Texts,
  SocialItemWrapper
} from "./Footer.styles";
import SparkLogotype from "@/app/shared/icons/SparkLogotype";

export const Footer = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <FooterContainer isDark={isDark}>
      <Wrapper isDark={isDark}>
        <Info>
          <Link href="/public" style={{display: 'flex', alignItems: 'center', color: 'inherit'}}>
            <SparkLogotype width="110" height="33" />
          </Link>
          <List>
            <ListItem href="/public" isDark={isDark}>
              Docs
            </ListItem>
            <ListItem href="/public" isDark={isDark}>
              Support
            </ListItem>
            <ListItem href="/public" isDark={isDark}>
              Careers
            </ListItem>
          </List>
          <Social>
            {socialListFooter.map(({ icon, title }, index) => {
              const SocialComponent: React.FC<TIconProps> = icon;
              return (
                <SocialItemWrapper
                  href="#"
                  key={title}
                  isDark={isDark}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <SocialItem isDark={isDark} isHovered={hoveredIndex === index}>
                    <SocialComponent
                      isHovered={index === 2 && !isDark ? false : hoveredIndex === index}
                      // color={index === 2 ? (isDark ? "#1C012A" : "#FFFFFF") : (hoveredIndex === index ? "#FFFFFF" : "#1C012A")}
                      color={index === 2 ? "#1C012A" : (hoveredIndex === index ? (isDark ? "#FFFFFF" : "#1C012A") : "#1C012A")}
                      isDark={isDark}
                    />
                  </SocialItem>
                </SocialItemWrapper>
              );
            })}
          </Social>
        </Info>
        <Texts>
          <p>© 2024 - Composability Labs</p>
          <p>Terms of Service</p>
        </Texts>
      </Wrapper>
    </FooterContainer>
  );
};
