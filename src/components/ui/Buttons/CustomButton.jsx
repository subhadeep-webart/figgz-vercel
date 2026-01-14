"use client";

import { Button, cn } from "@heroui/react";

const CustomButton = ({
    label = "",
    clickHandler = () => { },
    children,
    className = "",
    variant = "solid",
    type = "button",
}) => {
    return (
        <Button
            type={type}
            aria-label={label}
            radius="full"
            className={cn("bg-primary text-foreground", className)}
            onPress={clickHandler}
            variant={variant}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
