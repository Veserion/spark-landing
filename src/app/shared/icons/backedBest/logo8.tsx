import { FC } from "react"
import { type TIconProps } from './type';

export const Logo8:FC<TIconProps> = ({className, width=155, height=56, color="#FFFFFF"}) => {
  return <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 155 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M117.564 25.9431H119.363V32.9011H117.564V25.9431ZM122.56 25.7891C122.984 25.7891 123.376 25.8451 123.736 25.9571C124.096 26.0691 124.41 26.2417 124.677 26.4751C124.945 26.7084 125.153 27.0071 125.3 27.3711C125.448 27.7257 125.522 28.1504 125.522 28.6451V32.9011H123.722V28.9671C123.722 28.3791 123.579 27.9497 123.293 27.6791C123.017 27.3991 122.56 27.2591 121.923 27.2591C121.444 27.2591 121.01 27.3524 120.622 27.5391C120.235 27.7257 119.921 27.9637 119.681 28.2531C119.441 28.5331 119.303 28.8271 119.266 29.1351L119.252 28.4211C119.298 28.0944 119.405 27.7771 119.571 27.4691C119.737 27.1611 119.958 26.8811 120.235 26.6291C120.521 26.3677 120.858 26.1624 121.245 26.0131C121.633 25.8637 122.071 25.7891 122.56 25.7891Z"
      fill={color}
    />
    <path
      d="M115.926 32.9014H114.127V25.9434H115.926V32.9014ZM114.224 29.5554L114.238 30.0314C114.219 30.162 114.173 30.3534 114.1 30.6054C114.026 30.848 113.91 31.1094 113.754 31.3894C113.606 31.6694 113.412 31.94 113.172 32.2014C112.932 32.4534 112.637 32.6634 112.287 32.8314C111.936 32.99 111.521 33.0694 111.041 33.0694C110.663 33.0694 110.289 33.0227 109.92 32.9294C109.56 32.836 109.233 32.682 108.938 32.4674C108.642 32.2434 108.407 31.9447 108.232 31.5714C108.056 31.198 107.969 30.7267 107.969 30.1574V25.9434H109.768V29.8494C109.768 30.2974 109.837 30.652 109.975 30.9134C110.123 31.1654 110.335 31.3427 110.612 31.4454C110.889 31.548 111.216 31.5994 111.595 31.5994C112.093 31.5994 112.522 31.492 112.882 31.2774C113.242 31.0534 113.532 30.7827 113.754 30.4654C113.984 30.148 114.141 29.8447 114.224 29.5554Z"
      fill={color}
    />
    <path
      d="M104.404 25.9426H106.203V35.7006H104.404V25.9426ZM106.328 22.8906V24.4866H104.238V22.8906H106.328Z"
      fill={color}
    />
    <path
      d="M98.7109 25.9431H100.51V32.9011H98.7109V25.9431ZM103.153 27.4411C102.637 27.4411 102.189 27.5437 101.811 27.7491C101.433 27.9451 101.128 28.1877 100.898 28.4771C100.667 28.7664 100.505 29.0464 100.413 29.3171L100.399 28.5471C100.409 28.4351 100.445 28.2717 100.51 28.0571C100.575 27.8331 100.672 27.5951 100.801 27.3431C100.93 27.0817 101.101 26.8344 101.313 26.6011C101.525 26.3584 101.783 26.1624 102.088 26.0131C102.392 25.8637 102.747 25.7891 103.153 25.7891V27.4411Z"
      fill={color}
    />
    <path
      d="M89.4239 30.9258V29.3718H95.3471V30.9258H89.4239ZM87.1958 32.8998L91.4029 23.8418H93.3958L97.6445 32.8998H95.6378L91.9565 24.7378H92.8422L89.1887 32.8998H87.1958Z"
      fill={color}
    />
    <path
      d="M78.6002 31.8371C77.8529 31.8371 77.1932 31.7251 76.6212 31.5011C76.0584 31.2677 75.6202 30.9271 75.3065 30.4791C74.9928 30.0311 74.8359 29.4897 74.8359 28.8551C74.8359 28.2297 74.9882 27.6884 75.2926 27.2311C75.5971 26.7737 76.0307 26.4191 76.5935 26.1671C77.1656 25.9151 77.8345 25.7891 78.6002 25.7891C78.8124 25.7891 79.0154 25.8031 79.2092 25.8311C79.4121 25.8591 79.6105 25.8964 79.8042 25.9431L83.2779 25.9571V27.3291C82.8074 27.3384 82.3276 27.2824 81.8386 27.1611C81.3589 27.0304 80.9344 26.8904 80.5654 26.7411L80.5239 26.6431C80.8376 26.7924 81.1328 26.9791 81.4096 27.2031C81.6864 27.4177 81.9078 27.6697 82.0739 27.9591C82.2492 28.2391 82.3368 28.5657 82.3368 28.9391C82.3368 29.5457 82.1846 30.0684 81.8801 30.5071C81.5757 30.9364 81.142 31.2677 80.5792 31.5011C80.0257 31.7251 79.366 31.8371 78.6002 31.8371ZM80.9114 35.7711V35.4351C80.9114 35.0057 80.773 34.7071 80.4962 34.5391C80.2286 34.3711 79.8596 34.2871 79.3891 34.2871H77.244C76.8288 34.2871 76.4782 34.2544 76.1922 34.1891C75.9154 34.1237 75.694 34.0304 75.5279 33.9091C75.3618 33.7877 75.2419 33.6431 75.1681 33.4751C75.0943 33.3164 75.0574 33.1437 75.0574 32.9571C75.0574 32.5837 75.1773 32.3037 75.4172 32.1171C75.6571 31.9211 75.98 31.7904 76.3859 31.7251C76.7919 31.6597 77.2394 31.6457 77.7283 31.6831L78.6002 31.8371C78.019 31.8557 77.5853 31.9071 77.2993 31.9911C77.0225 32.0657 76.8842 32.2197 76.8842 32.4531C76.8842 32.5931 76.9395 32.7051 77.0502 32.7891C77.1609 32.8637 77.3178 32.9011 77.5208 32.9011H79.7766C80.3947 32.9011 80.9206 32.9664 81.3542 33.0971C81.7971 33.2371 82.1339 33.4657 82.3645 33.7831C82.5952 34.1097 82.7105 34.5531 82.7105 35.1131V35.7711H80.9114ZM78.6002 30.5211C78.997 30.5211 79.3429 30.4557 79.6382 30.3251C79.9426 30.1944 80.1779 30.0077 80.344 29.7651C80.51 29.5131 80.5931 29.2144 80.5931 28.8691C80.5931 28.5144 80.51 28.2111 80.344 27.9591C80.1779 27.7071 79.9472 27.5157 79.652 27.3851C79.3568 27.2451 79.0062 27.1751 78.6002 27.1751C78.2035 27.1751 77.8529 27.2451 77.5484 27.3851C77.244 27.5157 77.0087 27.7071 76.8426 27.9591C76.6766 28.2111 76.5935 28.5144 76.5935 28.8691C76.5935 29.2144 76.6766 29.5131 76.8426 29.7651C77.0087 30.0077 77.2394 30.1944 77.5346 30.3251C77.8391 30.4557 78.1943 30.5211 78.6002 30.5211Z"
      fill={color}
    />
    <path
      d="M68.5157 33.0551C67.833 33.0551 67.2102 32.9057 66.6474 32.6071C66.0938 32.2991 65.651 31.8744 65.3188 31.3331C64.9959 30.7824 64.8345 30.1477 64.8345 29.4291C64.8345 28.6917 65.0005 28.0524 65.3327 27.5111C65.6648 26.9697 66.1123 26.5497 66.6751 26.2511C67.2471 25.9431 67.893 25.7891 68.6126 25.7891C69.406 25.7891 70.0427 25.9524 70.5224 26.2791C71.0114 26.5964 71.3666 27.0304 71.588 27.5811C71.8095 28.1317 71.9202 28.7477 71.9202 29.4291C71.9202 29.8397 71.8556 30.2597 71.7264 30.6891C71.5973 31.1091 71.3989 31.5011 71.1313 31.8651C70.8638 32.2197 70.5132 32.5091 70.0796 32.7331C69.6459 32.9477 69.1247 33.0551 68.5157 33.0551ZM69.097 31.6551C69.6413 31.6551 70.1119 31.5617 70.5086 31.3751C70.9053 31.1884 71.2098 30.9271 71.422 30.5911C71.6342 30.2551 71.7403 29.8677 71.7403 29.4291C71.7403 28.9531 71.6296 28.5517 71.4081 28.2251C71.1959 27.8891 70.8915 27.6371 70.4947 27.4691C70.1072 27.2917 69.6413 27.2031 69.097 27.2031C68.3312 27.2031 67.7361 27.4084 67.3117 27.8191C66.8873 28.2204 66.6751 28.7571 66.6751 29.4291C66.6751 29.8771 66.7766 30.2691 66.9796 30.6051C67.1825 30.9317 67.4639 31.1884 67.8238 31.3751C68.1928 31.5617 68.6172 31.6551 69.097 31.6551ZM71.7403 25.9431H73.5394V32.9011H71.8648C71.8648 32.9011 71.851 32.8124 71.8233 32.6351C71.8049 32.4484 71.7864 32.2151 71.768 31.9351C71.7495 31.6551 71.7403 31.3797 71.7403 31.1091V25.9431Z"
      fill={color}
    />
    <path
      d="M59.6123 25.9431H61.4114V32.9011H59.6123V25.9431ZM64.0547 27.4411C63.538 27.4411 63.0906 27.5437 62.7123 27.7491C62.334 27.9451 62.0296 28.1877 61.7989 28.4771C61.5683 28.7664 61.4068 29.0464 61.3145 29.3171L61.3007 28.5471C61.3099 28.4351 61.3468 28.2717 61.4114 28.0571C61.476 27.8331 61.5729 27.5951 61.702 27.3431C61.8312 27.0817 62.0019 26.8344 62.2141 26.6011C62.4263 26.3584 62.6846 26.1624 62.9891 26.0131C63.2936 25.8637 63.6488 25.7891 64.0547 25.7891V27.4411Z"
      fill={color}
    />
    <path
      d="M57.9742 32.9014H56.1751V25.9434H57.9742V32.9014ZM56.272 29.5554L56.2858 30.0314C56.2673 30.162 56.2212 30.3534 56.1474 30.6054C56.0736 30.848 55.9583 31.1094 55.8014 31.3894C55.6538 31.6694 55.4601 31.94 55.2202 32.2014C54.9803 32.4534 54.6851 32.6634 54.3345 32.8314C53.9839 32.99 53.5687 33.0694 53.0889 33.0694C52.7106 33.0694 52.337 33.0227 51.9679 32.9294C51.6081 32.836 51.2806 32.682 50.9853 32.4674C50.6901 32.2434 50.4548 31.9447 50.2795 31.5714C50.1043 31.198 50.0166 30.7267 50.0166 30.1574V25.9434H51.8157V29.8494C51.8157 30.2974 51.8849 30.652 52.0233 30.9134C52.1709 31.1654 52.3831 31.3427 52.6599 31.4454C52.9367 31.548 53.2642 31.5994 53.6425 31.5994C54.1407 31.5994 54.5697 31.492 54.9295 31.2774C55.2894 31.0534 55.58 30.7827 55.8014 30.4654C56.0321 30.148 56.1889 29.8447 56.272 29.5554Z"
      fill={color}
    />
    <path
      d="M40.4209 25.9431H42.22V32.9011H40.4209V25.9431ZM45.4169 25.7891C45.8413 25.7891 46.2334 25.8451 46.5932 25.9571C46.953 26.0691 47.2667 26.2417 47.5343 26.4751C47.8019 26.7084 48.0094 27.0071 48.1571 27.3711C48.3047 27.7257 48.3785 28.1504 48.3785 28.6451V32.9011H46.5794V28.9671C46.5794 28.3791 46.4364 27.9497 46.1504 27.6791C45.8736 27.3991 45.4169 27.2591 44.7803 27.2591C44.3005 27.2591 43.8669 27.3524 43.4794 27.5391C43.0919 27.7257 42.7782 27.9637 42.5383 28.2531C42.2984 28.5331 42.16 28.8271 42.1231 29.1351L42.1093 28.4211C42.1554 28.0944 42.2615 27.7771 42.4276 27.4691C42.5937 27.1611 42.8151 26.8811 43.0919 26.6291C43.3779 26.3677 43.7146 26.1624 44.1021 26.0131C44.4896 25.8637 44.9279 25.7891 45.4169 25.7891Z"
      fill={color}
    />
    <path
      d="M31.1339 30.9258V29.3718H37.0571V30.9258H31.1339ZM28.9058 32.8998L33.1129 23.8418H35.1058L39.3544 32.8998H37.3477L33.6665 24.7378H34.5522L30.8986 32.8998H28.9058Z"
      fill={color}
    />
  </svg>
}