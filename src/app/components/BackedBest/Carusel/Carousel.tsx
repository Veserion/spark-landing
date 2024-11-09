import React, { useMemo } from "react";
import { WrapperList, List } from "./Carousel.styles";
import { logoList } from "@/shared";
import { useTheme } from "next-themes";

export const Carousel: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);
  
  const logoKeys = Object.keys(logoList) as (keyof typeof logoList)[];

  return (
    <section>
      <WrapperList isDark={isDark}>
        <List>
          {logoKeys.map((key) => {
            const LogoComponent = logoList[key];
            return (
              <div key={key}>
                <LogoComponent color={isDark ? "#ffffff" : "#1C012A"} />
              </div>
            );
          })}
        </List>
      </WrapperList>
    </section>
  );
};
