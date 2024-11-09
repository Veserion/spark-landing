import { FC } from "react";
import { type TIconProps } from "../type";

export const Logo15: FC<TIconProps> = ({
  className,
  width = 155,
  height = 56,
  color = "#FFFFFF",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)" fill={color}>
        <path d="M67.897 37.79c-.893-.961-1.807-1.904-2.664-2.898-.172-.197-.17-.59-.172-.89-.012-3.001-.033-6.002 0-9.003.076-7.057 5.934-12.617 13.026-12.393 6.777.216 12.223 6.3 11.852 13.243-.353 6.589-5.33 11.683-11.762 12.042-.167.008-.336 0-.576 0v-2.967c1.046-.246 2.114-.395 3.113-.748 4.38-1.556 6.98-6.396 5.934-10.944-1.097-4.777-5.401-7.951-10.094-7.445-4.68.504-8.332 4.522-8.375 9.28-.036 3.849-.009 7.697-.01 11.546v1.013l-.268.165h-.004Z" />
        <path d="M74.127 44.098c-.857-.911-1.744-1.8-2.556-2.753-.212-.25-.263-.705-.263-1.068-.016-4.976-.027-9.95-.006-14.925.015-3.607 2.69-6.377 6.126-6.403 3.472-.025 6.245 2.704 6.326 6.224.078 3.402-2.56 6.176-6.138 6.373v-3.011c.424-.145.87-.246 1.269-.443 1.393-.691 2.042-2.226 1.612-3.732-.419-1.471-1.821-2.408-3.359-2.242a3.03 3.03 0 0 0-2.71 2.988c-.04 4.728-.021 9.456-.023 14.184v4.639c-.092.057-.186.112-.278.17Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill={color}
            transform="translate(65.045 12.6)"
            d="M0 0h24.911v31.5H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
