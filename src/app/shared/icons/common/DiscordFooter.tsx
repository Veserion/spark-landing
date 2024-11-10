import { FC } from "react";
import { type TIconProps } from "../type";

export const DiscordFooter: FC<TIconProps> = ({
  className,
  width = 36,
  height = 36,
  color = "#FFFFFF",
}) => {
  return (
    <svg
      id={"DiscordFooter"}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3920_4165)">
        <mask
          id="mask0_3920_4165"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={width}
          height={height}
        >
          <path d="M0.5 35.5V0.5H35.5V35.5H0.5Z" fill={color} stroke={color} />
        </mask>
        <path
          d="M23.49 22.5291C21.84 22.4091 20.52 21.0591 20.52 19.3791C20.52 17.6991 20.52 19.2591 20.52 19.1991C20.52 19.1391 20.52 19.0791 20.52 19.0191C20.52 17.3391 21.84 15.9591 23.49 15.8691C25.14 15.9591 26.46 17.3391 26.46 18.9891C26.46 20.6391 26.46 19.1391 26.46 19.1991C26.46 19.2591 26.46 19.3191 26.46 19.3791C26.46 21.0591 25.14 22.4091 23.49 22.5291ZM12.54 22.5291C10.89 22.4091 9.57 21.0591 9.57 19.3791C9.57 17.6991 9.57 19.2591 9.57 19.1991C9.57 19.1391 9.57 19.0791 9.57 19.0191C9.57 17.3391 10.89 15.9591 12.54 15.8691C14.19 15.9591 15.51 17.3391 15.51 18.9891C15.51 20.6391 15.51 19.1391 15.51 19.1991C15.51 19.2291 15.51 19.3191 15.51 19.3791C15.51 21.0591 14.19 22.4391 12.54 22.5291ZM29.43 7.46914C27.48 6.53914 25.23 5.81914 22.89 5.39914H22.74C22.71 5.39914 22.68 5.39914 22.65 5.45914C22.38 5.90914 22.11 6.47914 21.87 7.04914L21.81 7.16914C20.67 6.98914 19.38 6.89914 18.03 6.89914C16.68 6.89914 15.39 6.98914 14.13 7.19914H14.28C13.98 6.47914 13.71 5.93914 13.38 5.36914L13.44 5.45914C13.44 5.42914 13.38 5.39914 13.35 5.39914C10.83 5.84914 8.58 6.56914 6.48 7.55914L6.66 7.49914C6.66 7.49914 6.63 7.49914 6.63 7.52914C3.39 11.9391 1.5 17.4591 1.5 23.4291C1.5 29.3991 1.56 25.4091 1.65 26.3691V26.2491C1.65 26.2791 1.65 26.3091 1.68 26.3391C4.02 28.1091 6.78 29.5191 9.72 30.4491L9.9 30.5091C9.9 30.5091 9.9 30.5091 9.93 30.5091C9.96 30.5091 9.99 30.5091 10.02 30.4791C10.62 29.6991 11.16 28.7991 11.64 27.8391L11.7 27.7191C11.7 27.7191 11.7 27.7191 11.7 27.6591C11.7 27.5991 11.7 27.5691 11.64 27.5691C10.65 27.1791 9.78 26.7591 8.97 26.3091L9.06 26.3691C9.03 26.3691 9 26.3091 9 26.2791C9 26.2491 9 26.2191 9.03 26.1891C9.21 26.0691 9.39 25.9191 9.54 25.7991C9.54 25.7991 9.57 25.7991 9.6 25.7991C9.63 25.7991 9.6 25.7991 9.63 25.7991C12.06 26.9691 14.91 27.6591 17.91 27.6591C20.91 27.6591 23.76 26.9691 26.31 25.7691L26.19 25.8291C26.19 25.8291 26.19 25.8291 26.22 25.8291H26.28C26.43 25.9791 26.61 26.0991 26.79 26.2191C26.79 26.2191 26.82 26.2791 26.82 26.3091C26.82 26.3391 26.82 26.3691 26.76 26.3991C26.04 26.8191 25.2 27.2391 24.3 27.5991H24.18C24.15 27.6591 24.12 27.6891 24.12 27.7491C24.12 27.8091 24.12 27.7791 24.12 27.8091C24.66 28.8591 25.23 29.7591 25.86 30.5991V30.5391C25.86 30.5391 25.86 30.5691 25.89 30.5691C25.92 30.5691 25.89 30.5691 25.92 30.5691C29.07 29.5791 31.8 28.1691 34.23 26.3691L34.17 26.4291C34.17 26.4291 34.2 26.3691 34.2 26.3391C34.29 25.4691 34.35 24.4791 34.35 23.4591C34.35 17.4891 32.46 11.9991 29.28 7.46914L29.34 7.55914C29.34 7.55914 29.34 7.52914 29.31 7.52914L29.43 7.46914Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3920_4165">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
