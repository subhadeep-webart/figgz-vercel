import * as React from "react";
const LineIcon = ({
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
      viewBox="0 0 2 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1={0.583585}
        y1={70.0088}
        x2={0.583585}
        y2={-0.0000839233}
        stroke="#D0D0D0"
        strokeWidth={1.16681}
      />
    </svg>
  );
};
export default LineIcon;
