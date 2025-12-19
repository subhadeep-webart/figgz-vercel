import { cn } from "@heroui/react";

const MenuList = ({ className, headerText, menuItems }) => {
    console.log("Menu Items===>",menuItems)
    return (
        <div className={cn("text-white", className)}>
            <h3 className="text-xl font-bold !mb-3">{headerText}</h3>
            <ul className="font-normal text-sm flex flex-col gap-2">
                {
                    menuItems?.map((menu, index) => (
                        <li key={`menu-${index + 1}`}>{menu?.menuName}</li>
                    ))
                }
            </ul>
        </div>

    )
}

export default MenuList;