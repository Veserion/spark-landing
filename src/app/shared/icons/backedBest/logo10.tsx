import { FC } from "react"
import { type TIconProps } from './type';

export const Logo10:FC<TIconProps> = ({className, width=155, height=56, color="#FFFFFF"}) => {
  return <svg
    className={className}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
    d="M103.222 33.055c-.692 0-1.319-.15-1.882-.448a3.472 3.472 0 0 1-1.315-1.274c-.323-.551-.484-1.186-.484-1.904 0-.738.157-1.377.471-1.918a3.36 3.36 0 0 1 1.314-1.26c.554-.308 1.186-.462 1.896-.462.618 0 1.144.093 1.578.28a2.66 2.66 0 0 1 1.052.784c.267.326.461.709.581 1.148.129.438.194.914.194 1.428 0 .41-.065.83-.194 1.26-.129.42-.328.812-.595 1.176a3.041 3.041 0 0 1-1.052.868c-.434.214-.955.322-1.564.322Zm.582-1.4c.544 0 1.014-.094 1.411-.28.397-.187.701-.448.914-.784.212-.336.318-.724.318-1.162 0-.476-.111-.878-.332-1.204a2.028 2.028 0 0 0-.914-.77c-.387-.178-.853-.266-1.397-.266-.766 0-1.361.205-1.786.616-.424.41-.636.952-.636 1.624 0 .448.101.84.304 1.176.203.326.484.583.844.77.369.186.794.28 1.274.28Zm2.643-8.512h1.799V32.9h-1.675c-.027-.215-.055-.49-.083-.826a12.456 12.456 0 0 1-.041-.966v-7.966ZM94.184 33.07c-.867 0-1.633-.14-2.297-.42-.656-.28-1.168-.687-1.537-1.219-.369-.541-.553-1.204-.553-1.988s.184-1.447.553-1.988c.37-.55.882-.966 1.537-1.246.664-.28 1.43-.42 2.297-.42.867 0 1.624.14 2.27.42.655.28 1.167.695 1.536 1.246.369.541.553 1.204.553 1.988s-.184 1.447-.553 1.988c-.37.532-.881.938-1.536 1.218-.646.28-1.403.42-2.27.42Zm0-1.4c.48 0 .909-.085 1.287-.253.388-.177.692-.43.913-.756.222-.336.332-.742.332-1.218s-.11-.882-.332-1.218a2.109 2.109 0 0 0-.9-.784 3.03 3.03 0 0 0-1.3-.266c-.48 0-.913.089-1.301.266a2.22 2.22 0 0 0-.927.77c-.222.336-.332.747-.332 1.232 0 .476.11.882.332 1.218.221.327.526.579.913.756.388.168.826.252 1.315.252ZM80.978 25.943h1.91l2.976 6.678-1.55.28-3.335-6.958Zm8.415 0-4.76 9.758h-1.87l2.035-3.836 2.671-5.922h1.924ZM72.14 25.943h1.8v6.958h-1.8v-6.958Zm4.997-.154c.424 0 .816.056 1.176.168.36.112.674.285.941.518.268.233.475.532.623.896.147.355.221.78.221 1.274v4.256H78.3v-3.934c0-.588-.143-1.017-.429-1.288-.277-.28-.733-.42-1.37-.42-.48 0-.913.093-1.3.28a2.747 2.747 0 0 0-.942.714c-.24.28-.378.574-.415.882l-.014-.714c.046-.327.152-.644.318-.952.166-.308.388-.588.665-.84a3.169 3.169 0 0 1 1.01-.616c.387-.15.826-.224 1.315-.224ZM70.5 22.89v1.597h-2.09V22.89h2.09Zm-1.951 3.053h1.799V32.9h-1.8v-6.958ZM61.786 33.055c-.683 0-1.306-.15-1.869-.448a3.572 3.572 0 0 1-1.328-1.274c-.323-.55-.484-1.185-.484-1.904 0-.737.166-1.377.498-1.918.332-.541.78-.961 1.342-1.26.572-.308 1.218-.462 1.938-.462.793 0 1.43.163 1.91.49.488.317.844.751 1.065 1.302.221.55.332 1.167.332 1.848 0 .41-.064.83-.194 1.26-.129.42-.327.812-.595 1.176a3.04 3.04 0 0 1-1.051.868c-.434.215-.955.322-1.564.322Zm.581-1.4c.544 0 1.015-.093 1.412-.28.396-.187.7-.448.913-.784a2.13 2.13 0 0 0 .318-1.162c0-.476-.11-.877-.332-1.204a1.942 1.942 0 0 0-.913-.756c-.388-.177-.854-.266-1.398-.266-.766 0-1.36.205-1.785.616-.425.401-.637.938-.637 1.61 0 .448.102.84.305 1.176.203.327.484.583.844.77.369.187.793.28 1.273.28Zm2.643-5.712h1.8v6.958h-1.675l-.042-.266c-.018-.187-.037-.42-.055-.7a12.53 12.53 0 0 1-.028-.826v-5.166ZM55.002 32.9V29.08c0-.383-.064-.7-.194-.952a1.259 1.259 0 0 0-.622-.574c-.277-.131-.65-.196-1.121-.196-.452 0-.863.088-1.232.266a2.466 2.466 0 0 0-.9.672c-.23.27-.36.56-.387.868l-.014-.77a2.83 2.83 0 0 1 .318-.924 3.138 3.138 0 0 1 1.66-1.442c.398-.16.84-.238 1.33-.238.424 0 .816.056 1.176.168.36.102.674.266.941.49.268.224.475.504.623.84.148.326.221.714.221 1.162V32.9h-1.799Zm-6.158 0v-9.757h1.799V32.9h-1.8ZM47.159 29.638c-.083.728-.337 1.349-.761 1.862-.425.514-1.002.906-1.73 1.176-.73.27-1.596.406-2.602.406-.84 0-1.61-.098-2.311-.294a5.247 5.247 0 0 1-1.8-.882 4.052 4.052 0 0 1-1.162-1.456c-.277-.588-.415-1.274-.415-2.058 0-.784.138-1.47.415-2.058a4.02 4.02 0 0 1 1.163-1.47 5.106 5.106 0 0 1 1.799-.896 8.199 8.199 0 0 1 2.31-.308c1.007 0 1.874.14 2.603.42.738.28 1.319.682 1.743 1.204.425.514.674 1.139.748 1.876h-1.827a2.348 2.348 0 0 0-.609-1.008c-.277-.29-.637-.509-1.08-.658-.442-.15-.968-.224-1.577-.224-.757 0-1.421.122-1.993.364-.572.233-1.015.584-1.329 1.05-.313.457-.47 1.027-.47 1.708 0 .672.157 1.237.47 1.694.314.458.757.808 1.329 1.05.572.233 1.236.35 1.993.35.609 0 1.13-.075 1.564-.224.443-.15.802-.364 1.08-.644.285-.28.493-.606.622-.98h1.827Z"
    fill={color}
    />
  </svg>
}