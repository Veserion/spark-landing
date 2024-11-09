import { FC } from "react";
import { type TIconProps } from "../type";

export const Audit: FC<TIconProps> = ({
  className,
  width = 60,
  height = 60,
  color = "#FFFFFF",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3519_12602)">
        <path
          d="M16.3502 49.5492C16.2502 49.5992 16.2002 49.6992 16.2002 49.8492C16.2002 49.9992 16.2002 50.0492 16.3502 50.1492C16.4502 50.2492 16.5502 50.2492 16.7502 50.2492C16.9502 50.2492 17.0502 50.2492 17.2002 50.1492C17.3502 50.0492 17.4002 49.9492 17.4502 49.7992V49.4492H16.8502C16.6002 49.4492 16.4502 49.4492 16.3502 49.5492Z"
          fill={color}
        />
        <path
          d="M43.2999 49.5492C43.1999 49.5992 43.1499 49.6992 43.1499 49.8492C43.1499 49.9992 43.1499 50.0492 43.2999 50.1492C43.3999 50.2492 43.5499 50.2492 43.6999 50.2492C43.8499 50.2492 43.9999 50.2492 44.1499 50.1492C44.2999 50.0492 44.3499 49.9492 44.3999 49.7992V49.4492H43.7999C43.5499 49.4492 43.3999 49.4492 43.2999 49.5492Z"
          fill={color}
        />
        <path
          d="M39.4499 48.1996C39.2999 48.1496 39.1999 48.0996 38.9999 48.0996C38.7999 48.0996 38.6999 48.0996 38.5499 48.1996C38.3999 48.2996 38.2999 48.3996 38.2499 48.4996C38.1999 48.5996 38.1499 48.7996 38.1499 48.9996C38.1499 49.1996 38.1499 49.3996 38.2499 49.5496C38.3499 49.6996 38.4499 49.7996 38.5499 49.8996C38.6999 49.9996 38.7999 49.9996 38.9999 49.9996C39.1999 49.9996 39.2999 49.9996 39.4499 49.8996C39.5999 49.8496 39.6999 49.6996 39.7499 49.5496C39.8499 49.3996 39.8499 49.2496 39.8499 48.9996C39.8499 48.7496 39.8499 48.5996 39.7499 48.4996C39.6499 48.3496 39.5499 48.2496 39.4499 48.1996Z"
          fill={color}
        />
        <path
          d="M15.5 2.5C8.3 2.5 2.5 8.3 2.5 15.5V57.5H57.5V2.5H15.5ZM13.9 16.7H18.1V24.25H25.9V16.7H30.1V36.05H25.9V27.65H18.1V36.05H13.9V16.7ZM14.1 51.1H12.6V49.05H10.6V51.1H9.1V45.85H10.6V47.8H12.6V45.85H14.1V51.1ZM18.9 51.1H17.55V50.55C17.45 50.7 17.35 50.85 17.2 50.95C17 51.1 16.7 51.15 16.35 51.15C16 51.15 15.75 51.1 15.55 51C15.35 50.9 15.15 50.75 15.05 50.55C14.95 50.35 14.85 50.15 14.85 49.9C14.85 49.65 14.9 49.45 15.05 49.25C15.2 49.05 15.35 48.9 15.65 48.85C15.9 48.75 16.25 48.7 16.65 48.7H17.45C17.45 48.5 17.4 48.35 17.25 48.25C17.1 48.15 16.9 48.05 16.6 48.05C16.3 48.05 16.2 48.05 16 48.15C15.8 48.2 15.65 48.3 15.5 48.4L15.05 47.45C15.3 47.3 15.55 47.2 15.9 47.1C16.2 47 16.55 46.95 16.85 46.95C17.5 46.95 18 47.1 18.4 47.4C18.75 47.7 18.95 48.2 18.95 48.85V51.1H18.9ZM23.05 50.5C22.9 50.7 22.65 50.85 22.35 51C22.05 51.1 21.7 51.2 21.25 51.2C20.8 51.2 20.55 51.2 20.25 51.1C19.9 51 19.65 50.9 19.45 50.8L19.85 49.8C20.05 49.9 20.25 50 20.55 50.1C20.8 50.15 21.05 50.2 21.3 50.2C21.55 50.2 21.7 50.2 21.8 50.1C21.9 50.05 21.95 50 21.95 49.9C21.95 49.8 21.95 49.75 21.8 49.75C21.65 49.75 21.6 49.7 21.45 49.65C21.3 49.6 21.15 49.65 21 49.6C20.85 49.55 20.65 49.55 20.5 49.5C20.3 49.5 20.15 49.4 20 49.3C19.85 49.2 19.75 49.1 19.65 48.95C19.55 48.8 19.5 48.6 19.5 48.4C19.5 48.2 19.6 47.9 19.75 47.7C19.9 47.5 20.15 47.35 20.4 47.2C20.65 47.05 21.05 47 21.5 47C21.95 47 22.05 47 22.35 47.1C22.65 47.15 22.9 47.25 23.1 47.35L22.65 48.35C22.45 48.25 22.25 48.15 22.05 48.1C21.85 48.1 21.65 48.05 21.5 48.05C21.35 48.05 21.1 48.05 21 48.15C20.9 48.2 20.85 48.25 20.85 48.35C20.85 48.45 20.85 48.5 21 48.55C21.1 48.55 21.2 48.65 21.35 48.65C21.5 48.65 21.65 48.65 21.8 48.7C21.95 48.7 22.15 48.75 22.3 48.8C22.45 48.8 22.6 48.9 22.75 49C22.9 49.1 23 49.2 23.1 49.35C23.2 49.5 23.25 49.7 23.25 49.9C23.25 50.1 23.2 50.35 23 50.55L23.05 50.5ZM28.25 51.1H26.8V49C26.8 48.7 26.75 48.5 26.6 48.35C26.5 48.2 26.3 48.15 26.1 48.15C25.9 48.15 25.8 48.15 25.7 48.25C25.6 48.35 25.5 48.4 25.4 48.55C25.3 48.7 25.3 48.9 25.3 49.1V51.05H23.85V45.5H25.3V47.4C25.4 47.3 25.5 47.25 25.6 47.15C25.85 47 26.15 46.9 26.5 46.9C26.85 46.9 27.1 46.95 27.35 47.1C27.6 47.25 27.8 47.45 27.95 47.7C28.1 47.95 28.15 48.3 28.15 48.75V51.1H28.25ZM30.55 49.1C30.6 49.3 30.7 49.45 30.85 49.6C31 49.75 31.15 49.85 31.3 49.9C31.5 49.95 31.7 50 31.9 50C32.1 50 32.35 49.95 32.55 49.85C32.75 49.75 32.95 49.6 33.1 49.4L34.05 50.25C33.8 50.6 33.5 50.8 33.1 51C32.7 51.15 32.3 51.25 31.8 51.25C31.3 51.25 31 51.2 30.65 51.05C30.3 50.9 30 50.75 29.75 50.5C29.5 50.25 29.3 49.95 29.15 49.65C29 49.35 28.95 48.95 28.95 48.55C28.95 48.15 29 47.8 29.15 47.45C29.3 47.1 29.5 46.85 29.75 46.6C30 46.35 30.3 46.15 30.65 46.05C31 45.9 31.4 45.85 31.8 45.85C32.2 45.85 32.7 45.95 33.1 46.1C33.5 46.25 33.8 46.5 34.05 46.85L33.1 47.7C32.95 47.5 32.75 47.35 32.55 47.25C32.35 47.15 32.1 47.1 31.9 47.1C31.7 47.1 31.5 47.1 31.3 47.2C31.1 47.25 30.95 47.35 30.85 47.5C30.7 47.65 30.6 47.8 30.55 48C30.5 48.2 30.45 48.4 30.45 48.6C30.45 48.8 30.45 49.05 30.55 49.2V49.1ZM36.1 51.1H34.7V45.55H36.1V51.1ZM41.05 50.15C40.85 50.45 40.6 50.7 40.25 50.9C39.9 51.1 39.5 51.15 39.05 51.15C38.6 51.15 38.2 51.05 37.85 50.9C37.5 50.7 37.25 50.45 37.05 50.15C36.85 49.85 36.75 49.45 36.75 49.05C36.75 48.65 36.85 48.3 37.05 47.95C37.25 47.65 37.5 47.4 37.85 47.2C38.2 47 38.6 46.95 39.05 46.95C39.5 46.95 39.9 47.05 40.25 47.2C40.6 47.4 40.85 47.65 41.05 47.95C41.25 48.25 41.35 48.65 41.35 49.05C41.35 49.45 41.25 49.8 41.05 50.15ZM45.8 51.1H44.45V50.55C44.35 50.7 44.25 50.85 44.1 50.95C43.9 51.1 43.6 51.15 43.25 51.15C42.9 51.15 42.65 51.1 42.45 51C42.2 50.9 42.05 50.75 41.95 50.55C41.85 50.35 41.75 50.15 41.75 49.9C41.75 49.65 41.8 49.45 41.95 49.25C42.1 49.05 42.3 48.9 42.55 48.85C42.8 48.75 43.15 48.7 43.55 48.7H44.35C44.35 48.5 44.3 48.35 44.15 48.25C44 48.15 43.8 48.05 43.5 48.05C43.2 48.05 43.1 48.05 42.9 48.15C42.7 48.25 42.55 48.3 42.4 48.4L41.95 47.45C42.2 47.3 42.45 47.2 42.8 47.1C43.1 47 43.45 46.95 43.75 46.95C44.4 46.95 44.9 47.1 45.3 47.4C45.65 47.7 45.85 48.2 45.85 48.85V51.1H45.8ZM40.05 33.25C41.45 33.25 42.15 32.45 42.55 31.35H46.5C46 33.75 44.3 36.4 39.95 36.4C35.6 36.4 33.1 33.25 33.1 28.9C33.1 24.55 35.7 21.2 40.15 21.2C44.6 21.2 46.4 24.7 46.5 26.35H42.55C42.3 25.15 41.65 24.35 40.05 24.35C38.45 24.35 37.15 25.95 37.15 28.8C37.15 31.65 38.25 33.3 40 33.3L40.05 33.25ZM49.7 51.1L48.55 49.7L48.1 50.15V51.15H46.7V45.6H48.1V48.5L49.55 47.1H51.25L49.55 48.85L51.4 51.15H49.65L49.7 51.1Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3519_12602">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
