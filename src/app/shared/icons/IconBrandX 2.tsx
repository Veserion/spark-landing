import React from 'react';

const IconBrandX = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path d="M4 20L10.768 13.232M13.228 10.772L20 4M4 4L15.733 20H20L8.267 4H4Z" stroke="url(#paint0_linear_3297_18550)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_3297_18550" x1="4" y1="4" x2="21.5211" y2="18.1113" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FAC8FF"/>
        <stop offset="0.33" stopColor="#C8FFEE"/>
        <stop offset="0.66" stopColor="#E9FF44"/>
        <stop offset="1" stopColor="#35EBFF"/>
      </linearGradient>
    </defs>
  </svg>
));

export default IconBrandX; 