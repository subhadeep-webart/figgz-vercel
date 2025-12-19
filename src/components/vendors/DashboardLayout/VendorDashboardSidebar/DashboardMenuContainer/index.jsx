import IconContainer from "@/components/dashboard/IconContainer";
import MenuContainer from "@/components/dashboard/MenuContainer";

const DashboardMenuContainer = ({ menuItem }) => {
    const { name = "", Icon, iconProps } = menuItem;
    console.log("Menu Itmes===>", menuItem);
    return (
        <MenuContainer>
            <IconContainer>
                <Icon {...iconProps} />
            </IconContainer>
            <p className="text-vendor-sidebar text-sm font-normal">{name}</p>
        </MenuContainer>
    )
}

export default DashboardMenuContainer;