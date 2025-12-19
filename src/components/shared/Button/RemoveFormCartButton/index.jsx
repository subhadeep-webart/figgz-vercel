import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const RemoveFormCartButton = ({ buttonText = "Remove", className }) => {
    return (
        <CustomButton className={cn("bg-transparent text-secondary font-medium text-sm", className)} variant="light">
            {buttonText}
        </CustomButton>
    )
}

export default RemoveFormCartButton;