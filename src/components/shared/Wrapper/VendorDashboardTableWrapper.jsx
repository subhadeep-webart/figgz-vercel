import { cn } from "@heroui/react";

const VendorDashboardTableWrapper = ({ className, children }) => {
    return (
        <div className={cn(`w-full bg-white rounded-2xl !px-5 !py-5`, className)}>
            {children}
        </div>
    )
}

export default VendorDashboardTableWrapper;