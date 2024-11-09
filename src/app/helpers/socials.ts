import { socialsSub, socialsFooter } from "@/shared";

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
const socialKeysSub = Object.keys(socialsSub) as (keyof typeof socialsSub)[];
const socialKeysFooter = Object.keys(socialsFooter) as (keyof typeof socialsFooter)[];

export const socialList: SocialItem[] = socialTitles.map((title, index) => ({
  title: title,
  icon: socialsSub[socialKeysSub[index]],
}));

export const socialListFooter: SocialItem[] = socialKeysFooter.map((key) => ({
  icon: socialsFooter[key],
}));
