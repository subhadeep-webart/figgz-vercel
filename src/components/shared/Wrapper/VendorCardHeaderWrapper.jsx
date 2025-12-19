import { cn } from "@heroui/react";

const VendorCardHeaderWrapper = ({ headerText = "", className, children }) => {
    return (<div className={cn(`w-full flex justify-between items-center border-l-3 border-border-vendor-card-header`, className)}>
        <h3 className="text-avatar-heading">{headerText}</h3>
        {children}
    </div>)
}

export default VendorCardHeaderWrapper;