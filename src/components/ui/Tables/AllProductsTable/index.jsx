"use client"

import { ALL_PRODUCT_TABLE_HEADER, RECENT_ORDER_TABLE_HEADER } from "@/constants/vendor_constant";
import VendorTableWrapper from "../components/VendorTableWrapper";
import { Icons } from "@/assets";
import CustomChip from "../../CustomChip";
import { Avatar, AvatarGroup, TableBody, TableCell, TableRow } from "@heroui/react";
import { useCallback } from "react";

const AllProductsTable = () => {
    const renderCell = useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "product":
                return (
                    <div className="flex text-vendor-base gap-2.5">
                        <div>
                            <Avatar src="/images/products/book.png" showFallback className="rounded-lg"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1">
                                <p className=" text-sm text-vendor-base">Suspendisse a erat..</p>
                                <span className="inline-block text-xs text-payment-info">SKU No: 4578</span>
                            </div>
                            <p className="text-product-active text-xs">In Stock</p>
                        </div>
                    </div>
                );

            default:
                return cellValue;
        }
    }, []);

    return (
        <VendorTableWrapper columns={ALL_PRODUCT_TABLE_HEADER} label="All Products Table">
            <TableBody items={[{
                id: 1,
                product: "Smart Watch Pro X",
                date: "2025-01-10",
                views: 1280,
                price: 199.99,
                profit: 45.5,
                inventory: 35,
                category: "Electronics",
            },]}>
                {(item) => (
                    <TableRow key={item.customer}>
                        {(columnKey) => (
                            <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </VendorTableWrapper>
    )
}

export default AllProductsTable;