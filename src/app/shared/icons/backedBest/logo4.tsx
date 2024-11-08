import { FC } from "react"
import { type TIconProps } from './type';

export const Logo4:FC<TIconProps> = ({className, width=155, height=56, color="#FFFFFF"}) => {
  return <svg
    className={className}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.16 24.372V16.1h.895v8.272h-.895Zm40.29 9.95c-.161-.437-.374-.576-.865-.457 0 .311 0 .622-.002.93v.001c-.004.903-.008 1.796.023 2.686.008.212.237.477.434.61 2.086 1.383 4.376 2.01 6.877 1.907 2.128-.09 3.927-.843 5.35-2.473 1.468-1.683 1.664-4.506.403-6.35-.873-1.279-2.17-1.997-3.514-2.642-.545-.261-1.093-.517-1.64-.773-1.054-.493-2.108-.985-3.14-1.517-3.33-1.715-3.019-5.508-1.15-7.215 1.018-.929 2.253-1.29 3.603-1.324 1.724-.042 3.287.374 4.414 1.775.297.37.522.798.748 1.228.14.265.28.531.436.784.084.134.22.235.355.337.063.047.126.094.184.144.032-.067.072-.133.112-.2.088-.146.176-.294.182-.445.036-.877.037-1.756.005-2.633-.009-.215-.136-.533-.3-.616-2.889-1.447-5.877-2.09-9-.844-3.973 1.583-4.905 6.47-1.761 9.36.804.74 1.814 1.277 2.788 1.796l.021.012c.75.4 1.516.766 2.283 1.133.903.431 1.805.863 2.678 1.348 2.903 1.614 2.423 5.298.315 6.84-1.79 1.309-3.74 1.559-5.814.89-2.11-.679-3.287-2.294-4.024-4.292Zm-2.67-6.132v.56c-.04.012-.079.027-.119.041-.09.034-.182.067-.278.084-1.118.185-1.568.482-1.605 2.1-.048 2.12-.027 4.243 0 6.364.007.47-.135.737-.546.952-4.52 2.368-9.057 2.485-13.478-.131-2.685-1.59-4.136-4.15-4.69-7.241-.473-2.631-.235-5.175.904-7.593 1.57-3.335 4.221-5.364 7.723-6.249 3.655-.922 7.22-.554 10.654 1.01.178.081.416.293.421.45.028.854.025 1.708.022 2.56l-.002.832c-.5.162-.746.035-.95-.436-1.055-2.433-2.987-3.558-5.553-3.748-2.459-.181-4.784.2-6.908 1.525-2.655 1.656-4.189 4.074-4.646 7.173-.419 2.843-.086 5.579 1.493 8.038 1.68 2.614 4.12 3.974 7.162 4.368 2.17.283 4.231-.036 6.251-.817.434-.168.634-.394.623-.926a147.884 147.884 0 0 1-.022-3.667c.001-.75.003-1.498-.002-2.247a5.035 5.035 0 0 0-.147-1.203c-.19-.743-.83-.905-1.46-1.038-.256-.054-.516-.088-.785-.124l-.367-.05v-.588H83.78Zm36.622 11.48h-.003l-2.86-2.98-8.132-8.478c1.943-.176 3.723-.518 5.287-1.596 2.835-1.954 3.07-5.74.459-7.964-1.651-1.406-3.684-1.714-5.737-1.784-1.574-.053-3.15-.04-4.726-.028-.692.006-1.385.012-2.077.012h-.595c-.151.517-.062.728.456.791.825.1 1.321.662 1.407 1.482.059.552.096 1.11.096 1.664.006 5.057.005 10.113.001 15.17 0 .362-.023.727-.06 1.088-.177 1.729-.228 1.78-1.956 2.104v.546h5.594v-.534c-1.725-.318-2.004-.67-2.004-2.474.001-1.513 0-3.027-.002-4.54l-.002-2.274v-1.639c1.075-.228 1.853-.014 2.621.823 1.345 1.466 2.72 2.905 4.094 4.343h.001l.001.003c1.626 1.701 3.252 3.402 4.828 5.149.893.99 1.798 1.36 3.027 1.18.026-.004.052-.01.117-.026l.162-.038h.003ZM105.6 17.958v9.046l1.166.002c1.037.001 2.054.003 3.071-.008a5.548 5.548 0 0 0 1.062-.127c1.43-.297 2.784-.77 3.667-2.045 1.208-1.748 1.114-5.134-2.128-6.304-1.653-.596-3.345-.577-5.045-.558-.597.007-1.195.014-1.793-.006Zm-65.561.029.415-.28a14461.368 14461.368 0 0 1 4.477 7.026l-.613.41-.204.137-4.477-7.021v-.002l.401-.27Zm-4.488 5.242-.189.428h.002l2.831 1.306 4.699 2.168.207-.48.185-.426-7.526-3.47-.21.474Zm23.164 6.334-.015.115-.114.858-4.09-.593-4.093-.594.063-.538.052-.434 2.722.394 5.475.792Zm-8.357-2.437Zm0 0-.331-.723-.081-.176 2.293-1.058 5.214-2.404.384.815.035.075-7.514 3.471Zm5.76 8.84a222.777 222.777 0 0 0-.638.752l-.159-.14-6.1-5.34.41-.46v-.002l.245-.275 1.532 1.341 4.71 4.123Zm-6.02 4.094.417-.112v-.001l-.795-2.738-1.531-5.275-.578.165h-.001l-.356.102 1.445 4.996.006.02.864 2.984.53-.141Zm2.679-22.338.824.519c-1.49 2.348-2.964 4.671-4.465 7.04l-.052-.034-.773-.51 3.034-4.766 1.432-2.248ZM37.504 36.43l.236.305h.001l2.142-1.878c1.39-1.218 2.767-2.427 4.16-3.65l-.365-.365-.327-.327-2.356 2.065-3.855 3.379.364.47Zm7.553-4.497.237.07.698.21-1.45 4.998-.86 2.965-.461-.112-.488-.12a18326.23 18326.23 0 0 1 2.324-8.012Zm-2.636-3.513-7.812 1.137c-.044.928.024 1.002.663.908.814-.12 1.628-.235 2.441-.35.938-.134 1.876-.267 2.813-.406.54-.08 1.078-.173 1.625-.268.242-.042.485-.084.731-.125l-.176-.758-.04-.174-.245.036Zm-6.877 4.752.297.689h.002c.887-.414 1.754-.82 2.62-1.223l.07-.033 2.299-1.072c-.163-.318-.3-.583-.453-.885l-2.568 1.199h-.001l-.053.025-2.31 1.078.097.222Zm20.168-13.02.413.489a6537.025 6537.025 0 0 0-4.139 3.617l-.185-.214a167.19 167.19 0 0 0-.454-.526l.426-.374 3.714-3.255v-.002l.22.261.005.005Zm-3.07 11.095-.144.317h.001l3.452 1.591 1.536.708.117-.288v-.001l.256-.63-4.955-2.274-.262.576Zm-12.64-3.883-.074.453-1.275-.179c-.678-.095-1.346-.19-2.013-.282a24.24 24.24 0 0 0-.52-.063c-.392-.045-.784-.09-1.166-.179-.154-.036-.35-.333-.345-.504.005-.17.26-.49.37-.476 1.434.189 2.864.41 4.293.631l.007.001.647.1c.022.004.042.02.072.046.018.016.041.036.071.058h-.001l-.065.394Zm1.273 8.444 1.332-2.084.822.525-1.607 2.527-1.344 2.115c-.238-.15-.46-.29-.71-.45l-.126-.08 1.633-2.553Zm1.453-19.163.538 1.849 1.01 3.48.056-.019.873-.282-.491-1.686-1.04-3.569-.38.092-.566.135Zm5.913 5.218.326.095a14968.09 14968.09 0 0 0 1.53-5.237c-.876-.41-.925-.39-1.15.422-.026.088-.05.177-.075.265-.044.157-.087.315-.132.471l-.937 3.26-.158.55.596.174Zm-11.508-1.207.009-.011.61-.751 2.134 1.863 2.023 1.766-.337.358-.338.36-2.913-2.546-1.188-1.039Zm16.025 6.207c.058.35.103.612.163.964l3.528-.511 1.863-.27-.142-.977c-1.826.269-3.605.53-5.412.794Zm-.07 11.83-.311.194-1.298-2.034-1.636-2.565c.506-.41.924-.358 1.255.158l1.995 3.122.513.803-.519.323Zm-6.912-3.6v5.44c.48.07.708.104.816.004.1-.09.099-.294.099-.682 0-.81.002-1.621.004-2.433l.004-1.218v-1.112h-.922Z"
      fill={color}
  />
</svg>
}