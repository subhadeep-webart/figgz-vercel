"use client";

import { Table, TableColumn, TableHeader } from "@heroui/react";

const VendorTableWrapper = ({ label = "", columns = [], children }) => {
  console.log("Columns=====>", columns);
  return (
    <Table
      aria-label={label} 
      classNames={{
        wrapper: ["rounded-none"],
        th: ["!px-7","text-sm"],
        td: ["!px-7 !py-6","border-b border-vendor-table-divider"],
      }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      {children}
    </Table>
  );
};

export default VendorTableWrapper;
