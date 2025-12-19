import MenuList from "@/components/shared/List/MenuList";
import { cn } from "@heroui/react";

const MenuWrapper = ({ className, category }) => {
    return (
        <div className={cn("!px-9 !py-6", className)}>
            <MenuList className={"text-foreground"} headerText={category?.category} menuItems={category?.menuItems} />
        </div>
    )
}

export default MenuWrapper;