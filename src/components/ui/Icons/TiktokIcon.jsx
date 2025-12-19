import * as React from "react";
const TiktokIcon = ({
  fill = "#000000",
  size = 20,
  width,
  height,
  ...props
}) => {
  const finalWidth = width || size;
  const finalHeight = height || size;

  return (
    <svg
      {...props}
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.9779 10.6667V21.3333C27.9779 25.0152 24.9954 28 21.3163 28H10.6577C6.97861 28 3.99609 25.0152 3.99609 21.3333V10.6667C3.99609 6.98477 6.97861 4 10.6577 4H21.3163C24.9954 4 27.9779 6.98477 27.9779 10.6667Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3231 16C11.1157 16 9.32617 17.7908 9.32617 20C9.32617 22.2092 11.1157 24 13.3231 24C15.5307 24 17.3201 22.2092 17.3201 20V8C17.7642 9.33333 19.4518 12 22.6494 12"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default TiktokIcon;
