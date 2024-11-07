import React from 'react';

const IconCoins = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
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
      d="M5.72255 2.44126C7.75981 1.85291 10.2402 1.85291 12.2775 2.44126C13.2995 2.73643 14.1926 3.17429 14.8506 3.744C15.5081 4.31331 16 5.08266 16 6C16 6.91734 15.5081 7.68669 14.8506 8.256C14.1926 8.82571 13.2995 9.26357 12.2775 9.55874C10.2402 10.1471 7.75981 10.1471 5.72255 9.55874C5.09071 9.37627 4.50817 9.13926 4 8.85029V11C4 11.1034 4.0263 11.215 4.21824 11.3924C4.44123 11.5985 4.8186 11.823 5.40876 12.0874C5.9128 12.3131 6.13839 12.9047 5.91264 13.4088C5.68689 13.9128 5.09528 14.1384 4.59124 13.9126C4.39125 13.8231 4.19276 13.729 4 13.6287V16C4 16.1034 4.0263 16.215 4.21824 16.3924C4.44123 16.5985 4.8186 16.823 5.40876 17.0874C5.9128 17.3131 6.13839 17.9047 5.91264 18.4088C5.68689 18.9128 5.09528 19.1384 4.59124 18.9126C3.9534 18.627 3.33078 18.2955 2.86076 17.8611C2.3597 17.398 2 16.7846 2 16V6C2 5.08266 2.4919 4.31331 3.14943 3.744C3.80743 3.17429 4.70048 2.73643 5.72255 2.44126ZM4 6C4 6.15466 4.0801 6.41631 4.45857 6.744C4.83657 7.07129 5.44352 7.39643 6.27745 7.63726C7.95219 8.12091 10.0478 8.12091 11.7225 7.63726C12.5565 7.39643 13.1634 7.07129 13.5414 6.744C13.9199 6.41631 14 6.15466 14 6C14 5.84534 13.9199 5.58369 13.5414 5.256C13.1634 4.92871 12.5565 4.60357 11.7225 4.36274C10.0478 3.87909 7.95219 3.87909 6.27745 4.36274C5.44352 4.60357 4.83658 4.92871 4.45857 5.256C4.0801 5.58369 4 5.84534 4 6ZM10.31 10.9842C11.5619 10.3583 13.2214 10 15 10C16.7786 10 18.4381 10.3583 19.69 10.9842C20.8821 11.5803 22 12.5887 22 14V18C22 19.4109 20.882 20.4193 19.69 21.0154C18.4382 21.6415 16.7787 22 15 22C13.2213 22 11.5618 21.6415 10.31 21.0154C9.11804 20.4193 8 19.4109 8 18V14C8 12.5887 9.1179 11.5803 10.31 10.9842ZM10 16.8502V18C10 18.2451 10.225 18.7367 11.2045 19.2266C12.1242 19.6865 13.4647 20 15 20C16.5353 20 17.8758 19.6865 18.7955 19.2266C19.775 18.7367 20 18.2451 20 18V16.8502C19.8977 16.9085 19.7941 16.9637 19.69 17.0158C18.4381 17.6417 16.7786 18 15 18C13.2214 18 11.5619 17.6417 10.31 17.0158C10.2059 16.9637 10.1023 16.9085 10 16.8502ZM20 14C20 14.2457 19.7749 14.7373 18.7955 15.2269C17.8759 15.6868 16.5354 16 15 16C13.4646 16 12.1241 15.6868 11.2045 15.2269C10.2251 14.7373 10 14.2457 10 14C10 13.7543 10.2251 13.2627 11.2045 12.7731C12.1241 12.3132 13.4646 12 15 12C16.5354 12 17.8759 12.3132 18.7955 12.7731C19.7749 13.2627 20 13.7543 20 14Z"
      fill="currentColor"
    />
  </svg>
));

export default IconCoins; 