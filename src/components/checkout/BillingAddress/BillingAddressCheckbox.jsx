"use client"
import { Checkbox, cn } from "@heroui/react";
import { useState } from "react";
import ChangeButton from "./ChangeButton";

const BillingAddressCheckbox = () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <Checkbox
            aria-label={"billing address"}
            classNames={{
                base: cn(
                    "inline-flex w-full bg-white",
                    "hover:bg-white/20 items-center justify-start",
                    "cursor-pointer rounded-lg gap-2 md:!px-10 !px-4 !py-2 border-1 border-image-wrapper",
                    "data-[selected=true]:border-primary",
                    "max-w-full",
                ),
                label: "w-full",
            }}
            isSelected={isSelected}
            onValueChange={setIsSelected}
        >
            <div className="w-full flex justify-between gap-2 items-center">
                <p className="text-xs md:text-base font-normal text-product-text-info">Billing Address Same as  Shipping Address</p>
                <ChangeButton />
            </div>
        </Checkbox>
    );
}

export default BillingAddressCheckbox;

