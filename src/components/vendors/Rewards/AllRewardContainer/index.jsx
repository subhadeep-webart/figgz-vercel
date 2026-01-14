"use client";

import { ALL_REWARDS_TABLE_HEADER } from "@/constants/vendor_constant";
import { useCallback } from "react";

const {
  default: VendorCardHeaderWrapper,
} = require("@/components/shared/Wrapper/VendorCardHeaderWrapper");
const {
  default: VendorDashboardTableWrapper,
} = require("@/components/shared/Wrapper/VendorDashboardTableWrapper");
const {
  default: RecentOrderTable,
} = require("@/components/ui/Tables/RecentOrdersTable");

const AllRewardContainer = () => {
 const items = [
  {
    id: "reward1",
    reward_name: "",
    description: "",
    eligibility_date: "",
    status: "",
    reward_value: "",
  },
  {
    id: "reward2",
    reward_name: "",
    description: "",
    eligibility_date: "",
    status: "",
    reward_value: "",
  },
  {
    id: "reward3",
    reward_name: "",
    description: "",
    eligibility_date: "",
    status: "",
    reward_value: "",
  },
   {
    id: "reward4",
    reward_name: "",
    description: "",
    eligibility_date: "",
    status: "",
    reward_value: "",
  },
   {
    id: "reward5",
    reward_name: "",
    description: "",
    eligibility_date: "",
    status: "",
    reward_value: "",
  },
];

  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "reward_name":
        return (
          <div className="flex flex-col">
            <p className="text-sm  text-vendor-base">Monthly Sell-Out Reward</p>
          </div>
        );

      case "description":
        return (
          <div className="flex flex-col">
            <p className="text-sm text-vendor-base">No product returns recorded for the month.</p>
          </div>
        );

      case "eligibility_date":
        return (
          <div className="flex flex-col">
            <p className="text-sm text-vendor-base">05 Oct 2025</p>
          </div>
        );

      case "status":
        return (
          <div className="flex flex-col">
            <p className="text-sm text-vendor-base">Achieved</p>
          </div>
        );

      case "reward_value":
        return (
          <div className="flex flex-col max-w-xs">
            <p className="text-sm text-vendor-base">$854</p>
          </div>
        );

      default:
        return <span>{cellValue}</span>;
    }
  }, []);
  return (
    <VendorDashboardTableWrapper>
      <VendorCardHeaderWrapper
        headerText="Achieved Reward"
        className="border-l-3 border-border-vendor-card-header !mb-4  !pl-3"
      ></VendorCardHeaderWrapper>
      <RecentOrderTable
        label="Achieved Reward"
        columns={ALL_REWARDS_TABLE_HEADER}
        items={items}
        renderCell={renderCell}
      />
    </VendorDashboardTableWrapper>
  );
};

export default AllRewardContainer;
