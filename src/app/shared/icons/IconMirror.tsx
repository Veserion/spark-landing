import React from "react";

export const IconMirror = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M3.3999 9.52C3.3999 4.82 7.2199 1 11.9199 1C16.6199 1 20.4399 4.82 20.4399 9.52V21.7C20.4399 22.42 19.8599 23 19.1399 23H4.6999C3.9799 23 3.3999 22.42 3.3999 21.7V9.52Z"
      fill="url(#paint0_linear_3297_18563)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.4199 21.94V9.54C19.4199 5.38 16.0599 2.02 11.9199 2.02C7.7799 2.02 4.4199 5.38 4.4199 9.54V21.94C4.4199 21.94 4.4199 21.98 4.4599 21.98H19.3799C19.3799 21.98 19.4199 21.98 19.4199 21.94ZM11.9199 1C7.2199 1 3.3999 4.82 3.3999 9.54V21.94C3.3999 22.52 3.8799 23 4.4599 23H19.3799C19.9599 23 20.4399 22.52 20.4399 21.94V9.54C20.4399 4.82 16.6199 1 11.9199 1Z"
      fill="#332263"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3297_18563"
        x1="4.5799"
        y1="2.92"
        x2="19.4799"
        y2="26.56"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.3" stopColor="#332263" stopOpacity="0" />
        <stop offset="0.7" stopColor="#332263" />
      </linearGradient>
    </defs>
  </svg>
));

IconMirror.displayName = "IconMirror";
