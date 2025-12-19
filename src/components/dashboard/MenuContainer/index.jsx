import { cn } from "@heroui/react";

const MenuContainer = ({ className, children }) => {
    return (
        <div className={cn("w-fit flex justify-start items-center rounded-full gap-5", className)}>
            {children}
        </div>
    )
}

export default MenuContainer;