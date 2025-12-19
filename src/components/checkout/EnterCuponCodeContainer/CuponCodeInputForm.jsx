"use client"
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import { Input } from "@heroui/react";

const CuponCodeInputForm = () => {
    return (
        <form className="w-full flex gap-2">
            <Input type="text" variant={"bordered"} isClearable classNames={{
                inputWrapper: [
                    "!pl-2 !pr-8",
                    "border-1",
                    "border-cupon-code",
                    "hover:!border-primary",
                    "focus:!border-primary",
                    "active:!border-primary",
                    "data-[filled=true]:!border-primary",
                    "data-[filled=true]:data-[hover=true]:!border-primary",
                    "data-[filled=true]:data-[focus=true]:!border-primary",
                    "data-[hover=true]:!border-primary",
                    "data-[focus=true]:!border-primary",
                    "data-[focus-visible=true]:shadow-none",
                    "data-[pressed=true]:!border-primary",
                ]
            }} />
            <CustomButton className="bg-primary text-raisin rounded-lg" type="submit">
                Submit
            </CustomButton>
        </form>
    )
}

export default CuponCodeInputForm;