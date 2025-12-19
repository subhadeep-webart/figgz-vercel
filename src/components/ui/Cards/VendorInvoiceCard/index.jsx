import { Divider } from "@heroui/react";
import CustomChip from "../../CustomChip";

const VendorInvoiceCard = () => {
    return (
        <div className="w-full bg-white !p-5 rounded-2xl flex gap-2 justify-center items-center shadow-md">
            <div className="w-4/5 flex flex-col gap-2">
                <p className="text-sm font-medium">Luke Sharma Doe</p>
                <div className="flex h-5 items-center !space-x-4 text-xs">
                    <p className="text-invoice-text font-normal">INV-10245</p>
                    <Divider orientation="vertical" />
                    <p className="text-invoice-date font-medium">Date: <span className="font-normal">July 15, 2025</span></p>
                    <Divider orientation="vertical" />
                    <p className="text-invoice-date font-normal">Amount: <span className="text-vendor-base">270000</span></p>
                </div>
            </div>
            <div className="w-1/5 text-end">
                <CustomChip className={"text-vendor-success border-1 border-vendor-success"}>
                    Paid
                </CustomChip>
            </div>
        </div>
    )
}

export default VendorInvoiceCard;