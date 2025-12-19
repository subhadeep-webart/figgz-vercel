import * as React from "react";
const FemaleIcon = ({
  fill = "currentColor",
  size = 20,
  width,
  height,
  ...props
}) => {
  const finalWidth = width || size;
  const finalHeight = height || size;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2283_10983)">
        <path
          d="M27.9922 35.7139L23.166 40.5401L18.3398 35.7139"
          stroke="#434343"
          strokeWidth={2.2281}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.1663 40.5398V27.509"
          stroke="#434343"
          strokeWidth={2.2281}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.3737 13.5123C14.1752 16.7108 14.1752 21.8966 17.3737 25.0952C20.5722 28.2937 25.7581 28.2937 28.9566 25.0952C32.1551 21.8966 32.1551 16.7108 28.9566 13.5123C25.7581 10.3137 20.5722 10.3137 17.3737 13.5123Z"
          stroke="#434343"
          strokeWidth={2.2281}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2283_10983">
          <rect
            width={32.7613}
            height={32.7613}
            fill="white"
            transform="translate(46.332 23.166) rotate(135)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default FemaleIcon;
