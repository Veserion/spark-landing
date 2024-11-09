import React from 'react';

const IconTransitionTop = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    {/* Вставьте содержимое из вашего SVG файла здесь */}
    <path
      d="..." // замените на ваш путь из SVG
      fill="currentColor"
    />
  </svg>
));

export default IconTransitionTop; 