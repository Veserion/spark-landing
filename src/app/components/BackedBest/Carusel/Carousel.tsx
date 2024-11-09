import React from "react";
import { WrapperList, List } from "./Carousel.styles";
import { logoList } from "@/shared";

export const Carousel: React.FC = () => {
  const logoKeys = Object.keys(logoList) as (keyof typeof logoList)[];

  return (
    <section>
      <WrapperList>
        <List>
          {logoKeys.map((key) => {
            const LogoComponent = logoList[key];
            return (
              <div key={key}>
                <LogoComponent />
              </div>
            );
          })}
        </List>
      </WrapperList>
    </section>
  );
};
