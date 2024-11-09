import { FC } from "react";
import { type TIconProps } from "../type";

export const AuditView: FC<TIconProps> = ({
  className,
  width = 28,
  height = 29,
  color = "#FFFFFF",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0011 4C16.7262 6.411 20.283 7.66633 23.9178 7.5C24.447 9.30018 24.6089 11.1884 24.3939 13.0524C24.179 14.9164 23.5915 16.7181 22.6664 18.3506C21.7413 19.9831 20.4976 21.4129 19.009 22.5552C17.5204 23.6975 15.8174 24.5289 14.0011 25M14.0011 4C11.276 6.411 7.71922 7.66633 4.08444 7.5C3.55525 9.30018 3.39333 11.1884 3.6083 13.0524C3.82326 14.9164 4.41074 16.7181 5.3358 18.3506C6.26087 19.9831 7.50465 21.4129 8.99324 22.5552C10.4818 23.6975 12.1849 24.5289 14.0011 25M14.0011 4V25M14.0002 13.3333H24.3835M14.0002 9.83333H24.3835M14.0002 6.33333H17.6168M14.0002 20.3333H21.2335M14.0002 16.8333H23.3335"
        stroke={color}
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
