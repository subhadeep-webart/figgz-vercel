import * as React from "react";
const TwitterICon = ({
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
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.6778 9.3155L22.2335 0H20.2061L12.7771 8.08852L6.8436 0H0L8.97263 12.2313L0 22H2.02756L9.87277 13.4583L16.139 22H22.9826L13.6773 9.3155H13.6778ZM10.9007 12.339L9.99162 11.1211L2.75812 1.42964H5.87234L11.7099 9.25094L12.619 10.4689L20.2071 20.6354H17.0928L10.9007 12.3395V12.339Z"
      fill="white"
    />
  </svg>
)};
export default TwitterICon;
