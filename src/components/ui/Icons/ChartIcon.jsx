const ChartIcon = ({ size = 19, color = '#F48B22' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.52051 9.11709C1.52051 5.53556 1.52051 3.7448 2.63315 2.63217C3.74578 1.51953 5.53654 1.51953 9.11807 1.51953C12.6996 1.51953 14.4904 1.51953 15.603 2.63217C16.7156 3.7448 16.7156 5.53556 16.7156 9.11709C16.7156 12.6986 16.7156 14.4894 15.603 15.602C14.4904 16.7147 12.6996 16.7147 9.11807 16.7147C5.53654 16.7147 3.74578 16.7147 2.63315 15.602C1.52051 14.4894 1.52051 12.6986 1.52051 9.11709Z"
                stroke={color}
                strokeWidth="1.30244"
            />
            <path
                d="M5.31836 13.6757V6.83789"
                stroke={color}
                strokeWidth="1.30244"
                strokeLinecap="round"
            />
            <path
                d="M9.11719 13.6757V4.55859"
                stroke={color}
                strokeWidth="1.30244"
                strokeLinecap="round"
            />
            <path
                d="M12.917 13.6757V9.87695"
                stroke={color}
                strokeWidth="1.30244"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default ChartIcon;
