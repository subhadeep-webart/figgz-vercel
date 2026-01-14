import { VENDOR_SIDEBAR_MENU } from "@/constants";
import DashboardMenuContainer from "../DashboardMenuContainer";
import { Divider } from "@heroui/react";

const DashboardMenuList = () => {
    return (
        <div className="flex flex-col gap-6 !py-24 !px-5 bg-white rounded-4xl">
            {
                VENDOR_SIDEBAR_MENU?.map((menuItem, index) => (
                    <div key={`user-menu-${index + 1}`} >
                        <DashboardMenuContainer menuItem={menuItem} />
                        <Divider className="bg-transparent border-solid my-2 border-sidebar-divider" />
                    </div>
                ))
            }
        </div>
    )
}

export default DashboardMenuList;