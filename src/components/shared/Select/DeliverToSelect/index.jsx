"use client";

import { COUNTRY_LIST } from "@/constants";
import { Select, SelectItem } from "@heroui/react";
import SelectCountryDisplay from "../components/SelectCountryDisplay";

const DeliverToSelect = () => {
    return (
        <Select
            label="Deliver to"
            items={COUNTRY_LIST}
            defaultSelectedKeys={["usa"]}
            variant="underlined"
            classNames={{
                trigger:
                    "min-h-[36px] h-[36px] w-full md:w-28 bg-transparent shadow-none hover:!bg-transparent data-[hover=true]:bg-transparent",
                label: "text-black font-semibold text-sm !pb-1",
                listbox: "!p-2 bg-transparent w-full md:w-28",
            }}
            renderValue={(items) => {
                return items.map((item) => (<SelectCountryDisplay key={item.data.key} icon={item.data.flag} text={item.data.label} />))
            }}
        >
            {
                (country) => (
                    <SelectItem
                        key={country.key}
                        value={country.key}
                        className="!p-2"
                    >
                        <SelectCountryDisplay icon={country.flag} text={country.label} />
                    </SelectItem>
                )
            }
        </Select>
    );
};

export default DeliverToSelect;
