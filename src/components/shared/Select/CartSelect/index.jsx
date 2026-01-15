"use client"

import { Select, SelectItem } from "@heroui/react";
import SelectCartSelectDisplay from "../components/SelectCartSelectDisplay";

const SIZE_CHART = [
    { key: "44", label: "44" },
    { key: "45", label: "45" },
    { key: "46", label: "46" },
];

const CartSelect = () => {
    return (
        <Select
            items={SIZE_CHART}
            className="lg:w-32 w-full"
            defaultSelectedKeys={["44"]}
            classNames={{
                trigger:
                    "min-h-[40px] h-[40px] bg-white shadow-none border border-image-wrapper hover:!bg-white data-[hover=true]:bg-white !px-4",
                label: "text-black font-semibold text-sm !pb-1",
                listbox: "!p-2 bg-transparent",
                option: ""
            }}
            radius="full"
            renderValue={(items) =>
                items.map((item) => (
                    <SelectCartSelectDisplay
                        key={item.key}
                        label="Size:"
                        text={item.data.label}
                    />
                ))
            }
        >
            {(item) => (
                <SelectItem key={item.key} value={item.key} className="!p-2">
                    <SelectCartSelectDisplay
                        text={item.label}
                    />
                </SelectItem>
            )}
        </Select>
    );
};

export default CartSelect;
