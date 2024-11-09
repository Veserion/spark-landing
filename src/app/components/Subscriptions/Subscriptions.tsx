"use client";
import React, { useMemo } from "react";
import { socialList } from "@/helpers";
import Link from "next/link";
import { useTheme } from "next-themes";
import { TIconProps } from "@/shared";
import { ButtonWithIcon } from "@/app/shared/ButtonWithIcon/ButtonWithIcon";
import IconHashcloack from "@/app/shared/icons/IconHashcloack";
import IconShieldHalfFilled from "@/app/shared/icons/IconShieldHalfFilled";
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
      <AuditBlock>
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
            <Item href="#" key={title} as={Link}>
              <IconWrapper>
                <SocialComponent isDark={index === 2 ? isDark : undefined} />
              </IconWrapper>
              <SocialTitle>{title}</SocialTitle>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};
