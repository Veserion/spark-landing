"use client";
import React, { useMemo } from "react";
import { IconHashcloack, IconShieldHalfFilled, ButtonWithIcon, TIconProps } from "@/shared";
import { socialList } from "@/helpers";
import { useTheme } from "next-themes";
import {
  Container,
  AuditBlock,
  Title,
  ButtonWrapper,
  List,
  Item,
  IconWrapper,
  SocialTitle
} from "./Subscriptions.styles";

export const Subscriptions: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  return (
    <Container>
      <AuditBlock isDark={isDark}>
        <div>
          <IconHashcloack width={60} height={60} />
          <Title>
            Fully audited by privacy first HashCloak lab
          </Title>
        </div>
        <ButtonWrapper>
          <ButtonWithIcon
            buttonText="View Audit"
            LeftIcon={IconShieldHalfFilled}
            backgroundColor={isDark ? "#171717" : "#FFFFFF"}
          />
        </ButtonWrapper>
      </AuditBlock>
      <List>
        {socialList.map(({ title, icon }, index) => {
          const SocialComponent: React.FC<TIconProps> = icon;
          return (
            <Item href="#" key={title} isDark={isDark}>
              <IconWrapper isDark={isDark} id={`icon${index}`}>
                <SocialComponent isDark={index === 2 ? isDark : undefined} color={isDark ? "#ffffff" : "#1C012A"} />
              </IconWrapper>
              <SocialTitle isDark={isDark}>{title}</SocialTitle>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};
