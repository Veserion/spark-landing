import React from 'react';

const IconApple = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_3297_18582)">
      <mask id="mask0_3297_18582" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path d="M24 0H0V24H24V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_3297_18582)">
        <path d="M3.30005 13.6V12.2C3.30005 12.2 3.30005 12.1 3.30005 12C3.30005 11.6 3.30005 11.2 3.50005 10.9C3.90005 9.20005 4.80005 7.80005 6.30005 7.00005C7.20005 6.50005 8.20005 6.20005 9.30005 6.40005C10 6.60005 10.7 6.80005 11.3 7.10005C11.8 7.30005 12.4 7.30005 12.9 7.10005C13.4 6.90005 13.9 6.70005 14.4 6.60005C16.1 6.10005 17.7 6.30005 19.1 7.40005C19.5 7.70005 19.9001 8.10005 20.2001 8.60005C18.6 9.70005 17.8 11.1 17.9 13.1C18 15.1 19.1 16.4 20.7001 17.2C20.7001 17.2 20.7001 17.2 20.7001 17.3C20.4001 18.2 20 19.1 19.5 20C19 20.8 18.5 21.5 17.9 22.2C17.2 22.9 16.3 23.2 15.3 23C14.8 22.9 14.4 22.7 14 22.5C13.2 22.2 12.4 22.1 11.6 22.3C11.1 22.4 10.6 22.6 10.1 22.8C9.60005 23 9.10005 23.1 8.60005 23C7.90005 22.9 7.40005 22.4 6.90005 21.9C5.80005 20.7 5.00005 19.4 4.40005 17.9C4.00005 16.8 3.70005 15.7 3.50005 14.5C3.50005 14.2 3.50005 13.9 3.40005 13.6H3.30005Z" fill="#332263"/>
        <path d="M16.2001 1C16.3001 2.4 15.9001 3.6 15.0001 4.6C14.6001 5.1 14.1001 5.5 13.5001 5.8C13.0001 6 12.5001 6.1 11.9001 6C11.9001 5.3 11.9001 4.6 12.2001 4C12.9001 2.4 14.1001 1.4 15.8001 1H16.1001H16.2001Z" fill="#332263"/>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3297_18582">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
));

export default IconApple; 