import { Icons } from "@/assets";
import { Button, cn } from "@heroui/react";

const ProductSliderNavigation=({ prevRef, nextRef, onPrevClick, onNextClick, leftButtonStyle,rightButtonStyle, showPrev = true,
    showNext = true, })=>{
    return(
        <>
         {showPrev && <Button
                isIconOnly
                aria-label={"Next"}
                radius="full"
                className={cn("z-10 bg-white rounded-full shadow-md opacity-100 group-hover:opacity-100 transition-opacity border-1 border-foreground min-h-5 h-5 min-w-5 !w-5", leftButtonStyle)}
                ref={prevRef}
                onPress={onPrevClick}
            >
                <Icons.ChevronLeft className="text-foreground" />
            </Button>}
            {showNext && <Button
                isIconOnly
                aria-label={"Next"}
                radius="full"
                ref={nextRef}
                className={cn("z-10 bg-white p-2 rounded-full shadow-md opacity-100 group-hover:opacity-100 transition-opacity border-1 border-foreground min-h-5 h-5 min-w-5 !w-5", rightButtonStyle)}
                onPress={onNextClick}
            >
                <Icons.ChevronRight className="text-foreground" />
            </Button>}
        </>
    )
};

export default ProductSliderNavigation;