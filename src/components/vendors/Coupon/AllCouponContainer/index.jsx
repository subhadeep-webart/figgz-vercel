"use client";
import { ALL_COUPONS_TABLE_HEADER } from "@/constants/vendor_constant";
import AllCouponContainerHeader from "../AllCouponContainerHeader";
import { useCallback } from "react";

const {
  default: VendorDashboardTableWrapper,
} = require("@/components/shared/Wrapper/VendorDashboardTableWrapper");
const {
  default: RecentOrderTable,
} = require("@/components/ui/Tables/RecentOrdersTable");

const AllCouponContainer = () => {
  const items = [
    {
      id: "coupon1",
      code: "",
      coupon_type: "",
      coupon_amount: "",
      description: "",
      product_ids: "",
      usage_limit: "",
      expiry_date: "",
    },
     {
      id: "coupon2",
      code: "",
      coupon_type: "",
      coupon_amount: "",
      description: "",
      product_ids: "",
      usage_limit: "",
      expiry_date: "",
    },
     {
      id: "coupon3",
      code: "",
      coupon_type: "",
      coupon_amount: "",
      description: "",
      product_ids: "",
      usage_limit: "",
      expiry_date: "",
    },
     {
      id: "coupon4",
      code: "",
      coupon_type: "",
      coupon_amount: "",
      description: "",
      product_ids: "",
      usage_limit: "",
      expiry_date: "",
    },
     {
      id: "coupon5",
      code: "",
      coupon_type: "",
      coupon_amount: "",
      description: "",
      product_ids: "",
      usage_limit: "",
      expiry_date: "",
    },
  ];

  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "code":
        return (
          <div className="flex flex-col">
            <p className="text-xs md:text-sm  text-vendor-base">TXN001</p>
          </div>
        );

      case "coupon_type":
        return (
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-vendor-base">Percentage discount</p>
          </div>
        );

      case "coupon_amount":
        return (
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-vendor-base">$120</p>
          </div>
        );

      case "description":
        return (
          <div className="flex flex-col max-w-xs">
            <p className="text-xs md:text-sm text-vendor-base">-</p>
          </div>
        );

      case "product_ids":
        return (
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-vendor-base">874558</p>
          </div>
        );

      case "usage_limit":
        return (
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-vendor-base">0/1</p>
          </div>
        );

      case "expiry_date":
        return (
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-vendor-base">02/25/2025</p>
          </div>
        );

      default:
        return <span>{cellValue}</span>;
    }
  }, []);

  return (
    <VendorDashboardTableWrapper>
      <AllCouponContainerHeader />
      <RecentOrderTable
        label="All Coupon"
        columns={ALL_COUPONS_TABLE_HEADER}
        items={items}
        renderCell={renderCell}
      />
    </VendorDashboardTableWrapper>
  );
};

export default AllCouponContainer;
