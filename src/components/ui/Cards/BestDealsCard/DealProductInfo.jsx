import { cn } from "@heroui/react";
import CustomButton from "../../Buttons/CustomButton";

const DealProductInfo = ({className,className1,className2}) => {
    return (
        <div className="w-full flex flex-col gap-2.5">
            <p className={cn("font-normal text-xs text-foreground", className2)}>Thrux HD Display SpO2 Monitoring Smartwatch</p>
            <div className="flex justify-between items-center">
                <span className={cn("inline-block font-bold text-sm text-foreground", className1)}>$20.00</span>
                <CustomButton className={cn("min-h-5 h-5 bg-secondary text-white text-[8px]", className)}>Shop now</CustomButton>
            </div>
        </div>
    )
}

export default DealProductInfo;