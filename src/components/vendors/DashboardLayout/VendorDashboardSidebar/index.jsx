import DashboardMenuContainer from "./DashboardMenuContainer";
import DashboardMenuList from "./DashboardMenuList";
import ProfileDetailsContainer from "./ProfileDetailsContainer";

const VendorDashboardSidebar = () => {
    return (
        <aside className="w-[20%]">
            <ProfileDetailsContainer />
            <DashboardMenuList />
        </aside>
    )
}

export default VendorDashboardSidebar;