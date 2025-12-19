import { Button, cn } from "@heroui/react";

const IconButton = ({
    label = "",
    clickHandler = () => { },
    children,
    className = ""
}) => {
    return (
        <Button
            isIconOnly
            aria-label={label}
            radius="full"
            className={cn("bg-primary", className)}
            onPress={clickHandler}
        >
            {children}
        </Button>
    );
};

export default IconButton;
