"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";
import CustomButton from "../../Buttons/CustomButton";
import { Icons } from "@/assets";
import UserDetails from "./UserDetails";
import { ALL_CATEGORIES } from "@/constants";
import MenuWrapper from "./MenuWrapper";
import CategoryDrawerCloseButton from "./CategoryDrawerCloseButton";
import { useRouter } from "next/navigation";

const CategoryDrawer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCloseDrawer = () => {
    onOpenChange(false);
  };
   const router = useRouter();
    const handleLogin = () => {
      router.push("/en/login");
    };
  
    const handleSignup = () => {
      router.push("/en/sign-up");
    };
  return (
    <>
      <div className="lg:flex flex-wrap gap-3 max-w-40 w-full hidden">
        <CustomButton
          variant="ghost"
          label="See Categories"
          className=" bg-transparent border-none outline-none px-2 rounded-lg"
          type="button"
          clickHandler={onOpen}
        >
          <div className="w-full flex items-center justify-start gap-2.5">
            <Icons.Menu className="text-foreground" size={21} />
            <span className="">All Categories</span>
            <Icons.ChevronDown className="text-foreground" />
          </div>
        </CustomButton>
      </div>

      <div className="lg:hidden" onClick={onOpen}>
        <Icons.Menu className="text-foreground" size={16} />
      </div>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        hideCloseButton={true}
      >
        <DrawerContent>
          <DrawerHeader className="flex justify-center items-center bg-primary !py-8 !px-10 relative">
            <UserDetails />
            <CategoryDrawerCloseButton clickHandler={handleCloseDrawer} />
          </DrawerHeader>
          <DrawerBody className="">
            <div className="flex justify-end !p-4 sm:hidden">
             <CustomButton
        className="bg-transparent text-secondary font-semibold text-sm"
        variant="light"
        clickHandler={handleLogin}
      >
        Log In
      </CustomButton>
      <CustomButton
        className="bg-transparent text-secondary font-semibold text-sm border-secondary border-1 "
        variant="bordered"
        clickHandler={handleSignup}
      >
        Sign up
      </CustomButton>
            </div>
            {ALL_CATEGORIES?.map((category, index) => (
              <MenuWrapper
                category={category}
                key={`category-${index + 1}`}
                className={
                  index !== ALL_CATEGORIES.length - 1
                    ? "border-b-1 border-border-icon"
                    : ""
                }
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CategoryDrawer;
