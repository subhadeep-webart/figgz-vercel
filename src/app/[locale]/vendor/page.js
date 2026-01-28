
import DashboardCardContainer from "@/components/vendors/Dashboard/DashboardCardContainer";
import DashboardCardContainerTotal from "@/components/vendors/Dashboard/DashboardCardContainerTotal";
import LatestInvoiceContainer from "@/components/vendors/Dashboard/LatestInvoiceContainer";
import RecentOrderTableContainer from "@/components/vendors/Dashboard/RecentOrderTableContainer";
import TopProductContainer from "@/components/vendors/Dashboard/TopProductContainer";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-6 section_padding">
      <DashboardCardContainer headerName="Daily Statistics" />
      <DashboardCardContainerTotal headerName="Total Statistics" />
      <RecentOrderTableContainer />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-7">
            <LatestInvoiceContainer/>
        </div>
        <div className="md:col-span-5">
          {" "}
          <TopProductContainer />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
