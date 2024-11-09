"use client";
import { useTheme } from "next-themes";
import styles from "./footer.module.css";
import { useMemo } from "react";
import Link from "next/link";
import { Logo } from "@/shared";
import { socialListFooter } from "@/helpers";
import { TIconProps } from "@/shared";

export const Footer = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <footer className={`${styles.container} ${isDark ? styles.isDark : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Link href="/public">
            <Logo />
          </Link>
          <div className={styles.list}>
            <Link href="/public" className={styles.item}>
              Docs
            </Link>
            <Link href="/public" className={styles.item}>
              Support
            </Link>
            <Link href="/public" className={styles.item}>
              Careers
            </Link>
          </div>
          <div className={styles.social}>
            {socialListFooter.map(({ icon, title }, index) => {
              const SocialComponent: React.FC<TIconProps> = icon;
              return (
                <Link href={"#"} key={title} className={styles.socialItem}>
                  <SocialComponent
                    className={styles.icon}
                    color={`${index !== 2 && "1C012A"}`}
                    isDark={index === 2 ? isDark : undefined}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.texts}>
          <p>© 2024 - Composability Labs</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};
