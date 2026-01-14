"use client"
import { Icons } from "@/assets";
import VendorCardHeaderWrapper from "@/components/shared/Wrapper/VendorCardHeaderWrapper";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import CustomChip from "@/components/ui/CustomChip";
import RecentOrderTable from "@/components/ui/Tables/RecentOrdersTable";
import { ALL_INVOICES_TABLE_HEADER } from "@/constants/vendor_constant";
import Link from "next/link";
import { useCallback } from "react";

const InvoiceTable = () => {
  const items = [
    {
      id: "invoice1",
      ID: "",
      invoice_for: "",
      order: "",
      payment_type: "",
      amount: "",
      date: "",
      status: "",
      action: "",
    },
     {
      id: "invoice2",
      ID: "",
      invoice_for: "",
      order: "",
      payment_type: "",
      amount: "",
      date: "",
      status: "",
      action: "",
    },
     {
      id: "invoice3",
      ID: "",
      invoice_for: "",
      order: "",
      payment_type: "",
      amount: "",
      date: "",
      status: "",
      action: "",
    },
     {
      id: "invoice4",
      ID: "",
      invoice_for: "",
      order: "",
      payment_type: "",
      amount: "",
      date: "",
      status: "",
      action: "",
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

      case "invoice_for":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">Mauris sit amet</p>
          </div>
        );

      case "order":
        return (
          <div className="relative flex flex-col">
            <p className="text-vendor-base text-sm">Shoe</p>
          </div>
        );

      case "payment_type":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">Card</p>
          </div>
        );
      case "amount":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">₹278200</p>
          </div>
        );
      case "date":
        return (
          <div className="flex flex-col">
            <p className="text-vendor-base text-sm">15 May 2025,</p>
            <span className="text-sm"> 10:00 AM</span>
          </div>
        );
      case "status":
        return (
          <CustomChip className={"bg-vendor-success text-white !py-1 !px-3"}>
            Complete
          </CustomChip>
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
        headerText="My Invoices"
        className="border-l-3 border-border-vendor-card-header !mb-4  !pl-3"
      >
        <Link href={"#"} className="text-card-header font-medium text-xs">
          View All
        </Link>
      </VendorCardHeaderWrapper>
      <RecentOrderTable
        label="My Invoices"
        columns={ALL_INVOICES_TABLE_HEADER}
        items={items}
        renderCell={renderCell}
      />
    </VendorDashboardTableWrapper>
  );
};

export default InvoiceTable;
