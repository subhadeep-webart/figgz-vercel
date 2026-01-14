"use client";
import { Icons } from "@/assets";
import VendorCardHeaderWrapper from "@/components/shared/Wrapper/VendorCardHeaderWrapper";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import CustomChip from "@/components/ui/CustomChip";
import RecentOrderTable from "@/components/ui/Tables/RecentOrdersTable";
import { RECENT_ORDER_TABLE_HEADER } from "@/constants/vendor_constant";
import { Avatar, AvatarGroup } from "@heroui/react";
import { useCallback } from "react";

const RecentOrderTableContainer = () => {
  const items = [
    {
      id: "order1",
      customer: "",
      items: "",
      order_price: "",
      address: "",
      status: "",
      action: "",
    },
    {
      id: "order2",
      customer: "",
      items: "",
      order_price: "",
      address: "",
      status: "",
      action: "",
    },
    {
      id: "order3",
      customer: "",
      items: "",
      order_price: "",
      address: "",
      status: "",
      action: "",
    },
    {
      id: "order4",
      customer: "",
      items: "",
      order_price: "",
      address: "",
      status: "",
      action: "",
    },
  ];

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "customer":
        return (
          <div className="flex flex-col text-vendor-base">
            <p>Johansan Doe</p>
            <span>#87459996</span>
          </div>
        );

      case "items":
        return (
          <div className="flex flex-col">
            <AvatarGroup isBordered max={3} className="w-fit">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </AvatarGroup>
          </div>
        );

      case "order_price":
        return (
          <div className="relative flex flex-col">
            <p>$500.00</p>
            <span className="inline-block">In Progress</span>
          </div>
        );

      case "status":
        return (
          <CustomChip className={"bg-vendor-success text-white !py-1 !px-3"}>
            Delivered
          </CustomChip>
        );
      case "address":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base">NY, New York</p>
            <span className="inline-block text-xs">
              56/JK road, pretium mi at
            </span>
          </div>
        );
      case "action":
        return (
          <div className="flex-1 items-center">
            <Icons.Ellipsis />
          </div>
        );

      default:
        return cellValue;
    }
  }, []);

  return (
    <VendorDashboardTableWrapper>
      <VendorCardHeaderWrapper
        headerText="Recent Orders"
        className="!mb-4 !pl-3"
      ></VendorCardHeaderWrapper>
      <RecentOrderTable
        label="Recent Orders"
        columns={RECENT_ORDER_TABLE_HEADER}
        items={items}
        renderCell={renderCell}
      />
    </VendorDashboardTableWrapper>
  );
};

export default RecentOrderTableContainer;
