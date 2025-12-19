"use client"

import { Icons } from "@/assets";
import { Button, cn } from "@heroui/react";

const MoreProductContainerHeader = ({ headerText }) => {
    return (<div className="w-full flex items-center justify-between">
        <h3 className="font-bold text-base">{headerText}</h3>
        <div className="flex justify-between items-center gap-5">
            <Button
                isIconOnly
                aria-label={"Next"}
                radius="full"
                className={cn("rounded-full shadow-md bg-white transition-opacity border-1 border-foreground min-h-7 h-7 w-7 min-w-7")}
            >
                <Icons.ChevronLeft className="text-foreground" />
            </Button>
            <Button
                isIconOnly
                aria-label={"Next"}
                radius="full"
                className={cn("rounded-full shadow-md bg-white transition-opacity border-1 border-foreground min-h-7 h-7 w-7 min-w-7")}
            >
                <Icons.ChevronRight className="text-foreground" />
            </Button>
        </div>
    </div>)
}

export default MoreProductContainerHeader;