import DashboardMenuList from "./DashboardMenuList";
import ProfileDetailsContainer from "./ProfileDetailsContainer";

const VendorDashboardSidebar = () => {
  return (
    <aside className="w-[20%] section_padding">
      <div className="relative z-10">
        <ProfileDetailsContainer />
      </div>
      <div className="!-mt-16">
        <DashboardMenuList />
      </div>
    </aside>
  );
};

export default VendorDashboardSidebar;
