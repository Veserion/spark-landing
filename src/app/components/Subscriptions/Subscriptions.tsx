import React from "react";
import styles from "./subscriptions.module.css";
import { socials, Audit, AuditView, TradeButton } from "@/shared";
import Link from "next/link";

type SocialItem = {
  title: string;
  icon: React.FC;
};

export const Subscriptions: React.FC = () => {
  const socialTitles: string[] = [
    "Stay Connected",
    "Any requests?",
    "Read our Blog",
    "Start Building",
  ];
  const socialKeys = Object.keys(socials) as (keyof typeof socials)[];

  const socialList: SocialItem[] = socialTitles.map((title, index) => ({
    title: title,
    icon: socials[socialKeys[index]],
  }));

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
        {socialList.map(({ title, icon }) => {
          const SocialComponent = icon;
          return (
            <Link href={"#"} key={title} className={styles.item}>
              <div className={styles.iconWrap}>
                <SocialComponent />
              </div>
              <p className={styles.socialTitle}>{title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
