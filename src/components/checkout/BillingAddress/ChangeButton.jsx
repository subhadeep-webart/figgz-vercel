import CustomButton from "@/components/ui/Buttons/CustomButton";

const ChangeButton = () => {
    return (
        <CustomButton className={"bg-transparent text-secondary font-medium text-xs md:text-sm p-0 min-h-5 h-5"} variant="light">
            Add Address
        </CustomButton>
    )
}

export default ChangeButton;