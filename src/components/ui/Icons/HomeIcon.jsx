import React from "react";

const HomeIcon = ({
    width = 27,
    height = 27,
    color = "#6B6B6B",
    strokeWidth = 2.5,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.18164 13.3081C2.18164 10.8125 2.18164 9.56477 2.74783 8.53039C3.31402 7.49601 4.34842 6.85403 6.41719 5.57009L8.5982 4.21649C10.7851 2.85927 11.8785 2.18066 13.0867 2.18066C14.2949 2.18066 15.3883 2.85927 17.5752 4.21649L19.7562 5.57008C21.825 6.85403 22.8593 7.49601 23.4255 8.53039C23.9917 9.56477 23.9917 10.8125 23.9917 13.3081V14.9668C23.9917 19.2207 23.9917 21.3477 22.7141 22.6692C21.4366 23.9908 19.3802 23.9908 15.2677 23.9908H10.9057C6.79312 23.9908 4.73686 23.9908 3.45924 22.6692C2.18164 21.3477 2.18164 19.2207 2.18164 14.9668V13.3081Z"
                stroke={color}
                strokeWidth={strokeWidth}
            />
            <path
                d="M16.3575 19.6289H9.81445"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};

export default HomeIcon;
