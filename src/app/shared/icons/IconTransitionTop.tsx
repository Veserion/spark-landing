import React from 'react';

export const IconTransitionTop = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
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
      d="M11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071C18.3166 14.0976 17.6834 14.0976 17.2929 13.7071L12 8.41421L6.70711 13.7071C6.31658 14.0976 5.68342 14.0976 5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929L11.2929 6.29289Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2929 11.2929C11.6834 10.9024 12.3166 10.9024 12.7071 11.2929L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L11.2929 11.2929Z"
      fill="currentColor"
    />
  </svg>
));

IconTransitionTop.displayName = 'IconTransitionTop'; 