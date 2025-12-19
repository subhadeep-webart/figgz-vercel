import { Chip, cn } from "@heroui/react";

const CustomBadge = ({ variant = "solid", className = "", children }) => {
    return (
        <Chip variant={variant} className={cn("bg-primary", className)}>
            {children}
        </Chip>
    )
}

export default CustomBadge;