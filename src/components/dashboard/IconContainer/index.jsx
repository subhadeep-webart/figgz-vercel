import { cn } from "@heroui/react";

const IconContainer = ({ className, isActive, children }) => {
    return (
        <div className={cn("min-w-10 w-10 min-h-10 h-10 bg-sidebar-icon-container flex justify-center items-center rounded-full", isActive && "bg-invoice-text", className)}>
            {children}
        </div>
    )
}

export default IconContainer;