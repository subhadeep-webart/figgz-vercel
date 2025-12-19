"use client"
import { Input } from "@heroui/react";
import CustomButton from "../Buttons/CustomButton";
import { Icons } from "@/assets";
const SearchBar = () => {
    return (
        <div className="border-border-seondary border-1 rounded-[100px] max-w-[624px] w-full flex !py-1.5 !px-2">
            <Input
                isClearable
                classNames={{
                    inputWrapper: "bg-transparent hover:!bg-transparent shadow-none group-data-[focus=true]:bg-transparent",
                    innerWrapper: "!pr-8 !pl-6"
                }}
                placeholder="Search everything on Figgz"
            />
            <CustomButton className="bg-primary max-w-40 w-full">
                <>
                    <Icons.Search className="text-foreground" />
                    <span className="text-raisin text-sm font-semibold">Search</span>
                </>
            </CustomButton>
        </div>
    )
}

export default SearchBar;