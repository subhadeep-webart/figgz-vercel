import { Divider } from "@heroui/react";
import CustomChip from "../../CustomChip";

const VendorInvoiceCard = () => {
    return (
        <div className="w-full bg-white !p-5 rounded-2xl flex flex-col md:flex-row md:gap-2 gap-4 justify-center items-center shadow-md">
            <div className="md:w-4/5 w-full flex flex-col gap-2">
            <div className="flex justify-between">
                <p className="text-xs md:text-sm font-medium">Luke Sharma Doe</p>
                 <CustomChip className={"text-vendor-success border-1 border-vendor-success md:hidden text-xs h-5 !px-4"}>
                    Paid
                </CustomChip>
                </div>
                <div className="flex h-5 items-center !space-x-4 text-[10px] md:text-xs">
                    <p className="text-invoice-text font-normal">INV-10245</p>
                    <Divider orientation="vertical" />
                    <p className="text-invoice-date font-medium">Date: <span className="font-normal">July 15, 2025</span></p>
                    <Divider orientation="vertical" />
                    <p className="text-invoice-date font-normal">Amount: <span className="text-vendor-base">270000</span></p>
                </div>
            </div>
            <div className="md:w-1/5 text-end hidden md:block">
                <CustomChip className={"text-vendor-success border-1 border-vendor-success"}>
                    Paid
                </CustomChip>
            </div>
        </div>
    )
}

export default VendorInvoiceCard;