import * as React from "react";
const ReturnIcon = ({
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
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M46.4564 22.623C47.4477 26.8156 47.0521 31.2167 45.329 35.1653C43.6058 39.1139 40.6482 42.3969 36.9002 44.5213C33.1522 46.6457 28.8162 47.4968 24.5432 46.9469C20.2703 46.3969 16.291 44.4756 13.2031 41.4714"
      stroke="#F48B22"
      strokeWidth={3.53261}
      strokeLinecap="round"
    />
    <path
      d="M7.61658 31.4587C7.31774 30.068 7.16737 28.6494 7.16801 27.2269C7.16014 23.3188 8.3033 19.4949 10.4549 16.2324C12.6064 12.9699 15.6711 10.4132 19.2665 8.88131C22.8619 7.34946 26.8287 6.91029 30.6721 7.61862C34.5155 8.32694 38.0652 10.1514 40.8783 12.8643"
      stroke="#F48B22"
      strokeWidth={3.53261}
      strokeLinecap="round"
    />
    <path
      d="M31.9326 13.7445L41.1494 13.0674L40.43 4.43457"
      stroke="#F48B22"
      strokeWidth={3.53261}
      strokeLinecap="round"
    />
    <path
      d="M21.9281 40.4219L12.7197 41.099L13.4391 49.7318"
      stroke="#F48B22"
      strokeWidth={3.53261}
      strokeLinecap="round"
    />
  </svg>
)};
export default ReturnIcon;
