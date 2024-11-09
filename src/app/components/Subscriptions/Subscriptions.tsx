import React, { useMemo } from "react";
import styles from "./subscriptions.module.css";
import { Audit, AuditView, TradeButton } from "@/shared";
import { socialList } from "@/helpers";
import Link from "next/link";
import { useTheme } from "next-themes";
import { TIconProps } from "@/shared";

export const Subscriptions: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <section className={styles.container}>
      <div className={styles.audit}>
        <div className={styles.block}>
          <Audit />
          <p className={styles.title}>
            Fully audited by privacy first HashCloak lab
          </p>
        </div>
        <div className={styles.buttonWrap}>
          <TradeButton
            buttonText="View Audit"
            icon={<AuditView />}
            backgroundDark="#171717"
            background="#FFFFFF"
          />
        </div>
      </div>
      <div className={styles.list}>
        {socialList.map(({ title, icon }, index) => {
          const SocialComponent: React.FC<TIconProps> = icon;
          return (
            <Link href={"#"} key={title} className={styles.item}>
              <div className={styles.iconWrap}>
                <SocialComponent isDark={index === 2 ? isDark : undefined} />
              </div>
              <p className={styles.socialTitle}>{title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
