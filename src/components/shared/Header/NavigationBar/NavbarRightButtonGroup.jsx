"use client";
import IconButton from "@/components/ui/Buttons/IconButton";
import { Icons } from "@/assets";
import LinkButton from "@/components/ui/Buttons/LinkButton";

const NavbarRightButtonGroup = () => {

  return (
    <div className="flex justify-center items-center px-2 py-2 gap-2.5">
      <IconButton className="bg-secondary min-w-6 w-6 h-6  lg:w-9 lg:h-9">
        <Icons.Bell color="white" className="min-w-3 w-3 h-3 lg:w-5 lg:h-5" />
      </IconButton>
      <LinkButton href={"/en/cart"}>
        <Icons.CartIcon fill="white" className="min-w-3 w-3 h-3 lg:w-5 lg:h-5" />
      </LinkButton>
      <LinkButton href="/en/wishlist">
        <Icons.Heart color="white" className="min-w-3 w-3 h-3 lg:w-5 lg:h-5" />
      </LinkButton>
    </div>
  );
};

export default NavbarRightButtonGroup;
