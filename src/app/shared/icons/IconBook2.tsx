import React from "react";

export const IconBook2 = React.forwardRef<
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 5C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6V15.1716C6.3182 15.0591 6.65606 15 7 15H18V5H7ZM20 4C20 3.44772 19.5523 3 19 3H7C6.20435 3 5.44129 3.31607 4.87868 3.87868C4.31607 4.44129 4 5.20435 4 6V18C4 18.7956 4.31607 19.5587 4.87868 20.1213C5.44129 20.6839 6.20435 21 7 21H19C19.5523 21 20 20.5523 20 20V4ZM18 17H7C6.73478 17 6.48043 17.1054 6.29289 17.2929C6.10536 17.4804 6 17.7348 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19H18V17ZM8 8C8 7.44772 8.44772 7 9 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H9C8.44772 9 8 8.55228 8 8Z"
      fill="currentColor"
    />
  </svg>
));

IconBook2.displayName = "IconBook2";
