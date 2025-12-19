import * as React from "react";
const MaleIcon = ({
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
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.8418 4.09473H28.6671V10.92"
        stroke="#434343"
        strokeWidth={2.04758}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.6653 4.09473L19.4512 13.3089"
        stroke="#434343"
        strokeWidth={2.04758}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6513 27.3016C18.1747 27.3016 21.8416 23.6346 21.8416 19.1112C21.8416 14.5878 18.1747 10.9209 13.6513 10.9209C9.12788 10.9209 5.46094 14.5878 5.46094 19.1112C5.46094 23.6346 9.12788 27.3016 13.6513 27.3016Z"
        stroke="#434343"
        strokeWidth={2.04758}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default MaleIcon;
