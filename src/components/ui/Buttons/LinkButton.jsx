"use client";

import Link from "next/link";
import { cn } from "@heroui/react";

const LinkButton = ({ href, children, className, ...props }) => {
    return (
        <Link
            href={href}
            className={cn(
                "bg-secondary min-w-10 w-10 min-h-10 h-10 flex justify-center items-center rounded-full",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
