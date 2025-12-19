import { cn } from "@heroui/react";

const TableWrapper = ({ className, children }) => {
    return (
        <table className={cn("w-full rounded-2xl overflow-hidden border-seperate border-spacing-0", className)}>
            {children}
        </table>
    )
}

export default TableWrapper;