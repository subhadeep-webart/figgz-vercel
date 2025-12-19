const CardIcon = ({ color = "#6B6B6B", width, height, size = 30 }) => {
    const finalWidth = width || size;
    const finalHeight = height || size;

    return (
        <svg
            width={finalWidth}
            height={finalHeight}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.4493 20.5635H22.4344"
                stroke={color}
                strokeWidth="2.02522"
                strokeLinecap="round"
            />
            <path
                d="M19.9418 16.8252H22.4344"
                stroke={color}
                strokeWidth="2.02522"
                strokeLinecap="round"
            />
            <path
                d="M12.4637 18.6947C12.4637 17.5197 12.4637 16.9322 12.0987 16.5672C11.7336 16.2021 11.1461 16.2021 9.97113 16.2021C8.79613 16.2021 8.20863 16.2021 7.84359 16.5672C7.47855 16.9322 7.47855 17.5197 7.47855 18.6947C7.47855 19.8697 7.47855 20.4572 7.84359 20.8223C8.20863 21.1873 8.79613 21.1873 9.97113 21.1873C11.1461 21.1873 11.7336 21.1873 12.0987 20.8223C12.4637 20.4572 12.4637 19.8697 12.4637 18.6947Z"
                stroke={color}
                strokeWidth="2.02522"
            />
            <path
                d="M2.49297 14.9557C2.49297 10.2556 2.49298 7.9056 3.95313 6.44547C5.41316 4.98535 7.76329 4.98535 12.4633 4.98535H17.4485C22.1485 4.98535 24.4985 4.98535 25.9587 6.44547C27.4188 7.9056 27.4188 10.2556 27.4188 14.9557C27.4188 19.6557 27.4188 22.0058 25.9587 23.4658C24.4985 24.926 22.1485 24.926 17.4485 24.926H12.4633C7.76329 24.926 5.41316 24.926 3.95313 23.4658C3.13905 22.6518 2.77887 21.5611 2.61947 19.9408"
                stroke={color}
                strokeWidth="2.02522"
                strokeLinecap="round"
            />
            <path
                d="M27.4188 12.4629H21.1873M2.49297 12.4629H16.2022"
                stroke={color}
                strokeWidth="2.02522"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default CardIcon;
