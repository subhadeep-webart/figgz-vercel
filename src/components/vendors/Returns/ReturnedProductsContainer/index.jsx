"use client";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import RecentOrderTable from "@/components/ui/Tables/RecentOrdersTable";
import ReturnedProductContainerHeader from "../ReturnedProductContainerHeader";
import CustomChip from "@/components/ui/CustomChip";
import { RETURNED_PRODUCTS_TABLE_HEADER } from "@/constants/vendor_constant";
import { useCallback } from "react";

const ReturnedProductsContainer = () => {
  const items = [
    {
      id: "return1",
      ID: "",
      order_number: "",
      product_name: "",
      customer: "",
      return_date: "",
      reason: "",
      status: "",
    },
    {
      id: "return2",
      ID: "",
      order_number: "",
      product_name: "",
      customer: "",
      return_date: "",
      reason: "",
      status: "",
    },
    {
      id: "return3",
      ID: "",
      order_number: "",
      product_name: "",
      customer: "",
      return_date: "",
      reason: "",
      status: "",
    },
    {
      id: "return4",
      ID: "",
      order_number: "",
      product_name: "",
      customer: "",
      return_date: "",
      reason: "",
      status: "",
    },
  ];

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "ID":
        return (
          <div className="flex gap-2">
            <div className="flex flex-col ">
              <p className="text-sm">TXN001</p>
            </div>
          </div>
        );

      case "order_number":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">#8745877</p>
          </div>
        );

      case "product_name":
        return (
          <div className="relative flex flex-col">
            <p className="text-vendor-base text-sm">Yellow Excavato</p>
          </div>
        );

      case "customer":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">Johansan Doe</p>
          </div>
        );
      case "return_date":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">24 April 2025</p>
          </div>
        );
      case "reason":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">Damaged during shipping</p>
          </div>
        );
      case "status":
        return (
          <CustomChip className={"bg-vendor-success text-white !py-1 !px-3"}>
            Complete
          </CustomChip>
        );

      default:
        return cellValue;
    }
  }, []);

  return (
    <VendorDashboardTableWrapper>
      <ReturnedProductContainerHeader />
      <RecentOrderTable
        label="Returned Products"
        columns={RETURNED_PRODUCTS_TABLE_HEADER}
        items={items}
        renderCell={renderCell}
      />
    </VendorDashboardTableWrapper>
  );
};

export default ReturnedProductsContainer;
