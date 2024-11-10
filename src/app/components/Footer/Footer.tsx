"use client";
import { useTheme } from "next-themes";
import { useMemo } from "react";
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
  Texts
} from "./Footer.styles";
import {SparkLogotype} from "@/app/shared/icons/SparkLogotype";

export const Footer = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

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
            {socialListFooter.map(({ icon, title }) => {
              const SocialComponent: React.FC<TIconProps> = icon;
              return (
                <SocialItem href="#" key={title} isDark={isDark}>
                  <SocialComponent
                    color={"#1C012A"}
                    isDark={isDark}
                  />
                </SocialItem>
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
