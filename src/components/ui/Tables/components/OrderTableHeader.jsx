import { cn } from "@heroui/react";

const OrderTableHeader = ({ tableHeader, className = "" ,bgClassName}) => {
    return (
        <thead>
            <tr className={cn("bg-order-table-header",bgClassName)}>
                {tableHeader?.map((tableHeader, index) => (<th className={cn("!py-4 !px-6 text-left font-normal text-lg text-product-text-base", className)} key={`order_table_header-${index + 1}`}>{tableHeader?.headerName}</th>))}
            </tr>
        </thead>
    )
}

export default OrderTableHeader;