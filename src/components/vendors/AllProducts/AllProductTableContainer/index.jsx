"use client";
import { Icons } from "@/assets";
import VendorCardHeaderWrapper from "@/components/shared/Wrapper/VendorCardHeaderWrapper";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import CustomChip from "@/components/ui/CustomChip";
import RecentOrderTable from "@/components/ui/Tables/RecentOrdersTable";
import { ALL_PRODUCT_TABLE_HEADER } from "@/constants/vendor_constant";
import { Avatar, AvatarGroup } from "@heroui/react";
import { useCallback } from "react";

const AllProductTableContainer = () => {
  const items = [
    {
      id: "product1",
      product: "",
      date: "",
      views: "",
      price: "",
      profit: "",
      inventory: "",
      category: "",
    },
    {
      id: "product2",
      product: "",
      date: "",
      views: "",
      price: "",
      profit: "",
      inventory: "",
      category: "",
    },
    {
      id: "product3",
      product: "",
      date: "",
      views: "",
      price: "",
      profit: "",
      inventory: "",
      category: "",
    },
    {
      id: "product4",
      product: "",
      date: "",
      views: "",
      price: "",
      profit: "",
      inventory: "",
      category: "",
    },
    {
      id: "product5",
      product: "",
      date: "",
      views: "",
      price: "",
      profit: "",
      inventory: "",
      category: "",
    },
  ];
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "product":
        return (
          <div className="flex gap-2">
            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

            <div className="flex flex-col text-vendor-base">
              <p className="text-sm">Suspendisse a erat..</p>
              <span className="text-xs">SKU No: 4578</span>
              <span className="inline-block text-xs text-product-active !mt-1">
                Active
              </span>
            </div>
          </div>
        );

      case "date":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">2025-07-10</p>
          </div>
        );

      case "views":
        return (
          <div className="relative flex flex-col">
            <p className="text-vendor-base text-sm">5874</p>
          </div>
        );

      case "price":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">$9874</p>
          </div>
        );
      case "profit":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">$98</p>
          </div>
        );
      case "inventory":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">100 in stock</p>
          </div>
        );
      case "category":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">Fashion</p>
          </div>
        );

      default:
        return cellValue;
    }
  }, []);
  return (
    <VendorDashboardTableWrapper>
      <VendorCardHeaderWrapper
        headerText="All Products"
        className="border-l-3 border-border-vendor-card-header !mb-4  !pl-3"
      ></VendorCardHeaderWrapper>
      <RecentOrderTable
        label="All Products"
        columns={ALL_PRODUCT_TABLE_HEADER}
        items={items}
        renderCell={renderCell}
      />
    </VendorDashboardTableWrapper>
  );
};

export default AllProductTableContainer;
