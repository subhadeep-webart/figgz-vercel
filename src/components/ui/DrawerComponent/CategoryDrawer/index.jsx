"use client"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
} from "@heroui/react"
import CustomButton from "../../Buttons/CustomButton";
import { Icons } from "@/assets";
import UserDetails from "./UserDetails";
import { ALL_CATEGORIES } from "@/constants";
import MenuWrapper from "./MenuWrapper";
import CategoryDrawerCloseButton from "./CategoryDrawerCloseButton";

const CategoryDrawer = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleCloseDrawer=()=>{
        onOpenChange(false)
    }
    return (
        <>
            <div className="flex flex-wrap gap-3 max-w-40 w-full">
                <CustomButton variant="ghost" label="See Categories" className="bg-transparent border-none outline-none px-2 rounded-lg" type="button" clickHandler={onOpen}>
                    <div className="w-full flex items-center justify-start gap-2.5">
                        <Icons.Menu className="text-foreground" size={21} />
                        <span>All Categories</span>
                        <Icons.ChevronDown className="text-foreground" />
                    </div>
                </CustomButton>
            </div>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left" hideCloseButton={true}>
                <DrawerContent>
                    <DrawerHeader className="flex justify-center items-center bg-primary !py-8 !px-10 relative">
                        <UserDetails />
                        <CategoryDrawerCloseButton clickHandler={handleCloseDrawer}/>
                    </DrawerHeader>
                    <DrawerBody className="">
                        {
                            ALL_CATEGORIES?.map((category, index) => (
                                <MenuWrapper
                                    category={category}
                                    key={`category-${index + 1}`}
                                    className={index !== ALL_CATEGORIES.length - 1 ? "border-b-1 border-border-icon" : ""}
                                />
                            ))
                        }
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CategoryDrawer;