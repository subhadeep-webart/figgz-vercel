"use client"

import { Table, TableColumn, TableHeader } from "@heroui/react";

const VendorTableWrapper = ({ label = "", columns=[], children }) => {
    console.log("Columns=====>", columns);
    return (
        <Table aria-label={label}>
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            {children}
        </Table>
    )
}

export default VendorTableWrapper;