import { socials } from "@/shared";

type SocialItem = {
  title?: string;
  icon: React.FC;
};

const socialTitles: string[] = [
  "Stay Connected",
  "Any requests?",
  "Read our Blog",
  "Start Building",
];
const socialKeys = Object.keys(socials) as (keyof typeof socials)[];

const socialFooter = socialKeys;
socialFooter.splice(2, 1);

export const socialList: SocialItem[] = socialTitles.map((title, index) => ({
  title: title,
  icon: socials[socialKeys[index]],
}));

export const socialListFooter: SocialItem[] = socialFooter.map((key) => ({
  icon: socials[key],
}));
