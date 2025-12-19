import { VENDOR_SIDEBAR_MENU } from "@/constants";
import DashboardMenuContainer from "../DashboardMenuContainer";
import { Divider } from "@heroui/react";

const DashboardMenuList = () => {
    return (
        <div className="flex flex-col gap-6 !py-3.5 !px-5">
            {
                VENDOR_SIDEBAR_MENU?.map((menuItem, index) => (
                    <>
                        <DashboardMenuContainer menuItem={menuItem} key={`user-menu-${index + 1}`} />
                        <Divider className="bg-transparent border-solid my-2 border-sidebar-divider" />
                    </>
                ))
            }
        </div>
    )
}

export default DashboardMenuList;