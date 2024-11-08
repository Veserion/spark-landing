import { FC } from "react"
import { type TIconProps } from './type';

export const Blog:FC<TIconProps> = ({className, width=36, height=36, color="#FFFFFF"}) => {
  return <svg
    className={className}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.6 14.28C5.6 7.506 11.106 2 17.88 2c6.774 0 12.28 5.506 12.28 12.28v18.27c0 .804-.646 1.45-1.45 1.45H7.05c-.804 0-1.45-.646-1.45-1.45V14.28Z"
      fill="url(#a)"
      stroke={color}
    />
      <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M29.13 32.91v-18.6c0-6.24-5.04-11.28-11.25-11.28S6.63 8.07 6.63 14.31v18.6s0 .06.06.06h22.38s.06 0 .06-.06ZM17.88 1.5C10.83 1.5 5.1 7.23 5.1 14.31v18.6c0 .87.72 1.59 1.59 1.59h22.38a1.6 1.6 0 0 0 1.59-1.59v-18.6c0-7.08-5.73-12.81-12.78-12.81Z"
      fill={color}
    />
    <defs>
      <linearGradient
        id="a"
        x1="6.87"
        y1="4.38"
        x2="29.22"
        y2="39.84"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset=".3"
          stop-color={color}
          stop-opacity="0"
        />
        <stop
          offset=".7"
          stop-color={color}
        />
      </linearGradient>
    </defs>
  </svg>
}