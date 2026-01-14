"use client";

import { COUNTRY_LIST } from "@/constants";
import { Select, SelectItem } from "@heroui/react";
import SelectCountryDisplay from "../components/SelectCountryDisplay";

const LanguageSelect = () => {
    return (

        <Select
            items={COUNTRY_LIST}
            defaultSelectedKeys={["usa"]}
            variant="underlined"
            classNames={{
                trigger:
                    "min-h-[36px] h-[36px] w-14 bg-transparent shadow-none hover:!bg-transparent data-[hover=true]:bg-transparent",
                label: "text-black font-semibold text-sm !pb-1",
                listbox: "!px-2 !py-2 bg-transparent",
            }}
            popoverProps={{
                classNames: {
                    base: "w-20",
                    content: "w-20",
                },
            }}
            renderValue={(items) => {
                console.log("Items=====>", items);
                return items.map((item) => (<SelectCountryDisplay key={item.data.key} icon={item.data.flag} />))
            }}
        >
            {
                (country) => (
                    <SelectItem
                        key={country.key}
                        value={country.key}
                        className="!px-2 !py-2"
                    >
                        <SelectCountryDisplay icon={country.flag} />
                    </SelectItem>
                )
            }
        </Select>

    );
};

export default LanguageSelect;
