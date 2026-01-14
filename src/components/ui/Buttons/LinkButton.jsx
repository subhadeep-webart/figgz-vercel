"use client";

import Link from "next/link";
import { cn } from "@heroui/react";

const LinkButton = ({ href, children, className, ...props }) => {
    return (
        <Link
            href={href}
            className={cn(
                "bg-secondary min-w-7 w-7 min-h-7 h-7 lg:min-w-10 lg:w-10 lg:min-h-10 lg:h-10 flex justify-center items-center rounded-full",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
