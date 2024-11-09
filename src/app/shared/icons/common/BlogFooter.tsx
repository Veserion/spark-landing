import { FC } from "react";
import { type TIconProps } from "../type";

export const BlogFooter: FC<TIconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.8999 9.52C3.8999 5.09614 7.49604 1.5 11.9199 1.5C16.3438 1.5 19.9399 5.09614 19.9399 9.52V21.7C19.9399 22.1439 19.5838 22.5 19.1399 22.5H4.6999C4.25604 22.5 3.8999 22.1439 3.8999 21.7V9.52Z"
        fill="url(#paint0_linear_5001_18759)"
        stroke="url(#paint1_linear_5001_18759)"
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M19.4199 21.94V9.54C19.4199 5.38 16.0599 2.02 11.9199 2.02C7.7799 2.02 4.4199 5.38 4.4199 9.54V21.94C4.4199 21.94 4.4199 21.98 4.4599 21.98H19.3799C19.3799 21.98 19.4199 21.98 19.4199 21.94ZM11.9199 1C7.2199 1 3.3999 4.82 3.3999 9.54V21.94C3.3999 22.52 3.8799 23 4.4599 23H19.3799C19.9599 23 20.4399 22.52 20.4399 21.94V9.54C20.4399 4.82 16.6199 1 11.9199 1Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5001_18759"
          x1="11.9199"
          y1="1"
          x2="11.9199"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5001_18759"
          x1="11.9199"
          y1="1"
          x2="11.9199"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
