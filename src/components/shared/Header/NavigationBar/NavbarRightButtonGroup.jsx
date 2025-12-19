"use client";
import IconButton from "@/components/ui/Buttons/IconButton";
import { Icons } from "@/assets";
import LinkButton from "@/components/ui/Buttons/LinkButton";

const NavbarRightButtonGroup = () => {

  return (
    <div className="flex justify-center items-center px-2 py-2 gap-2.5">
      <IconButton className="bg-secondary min-w-9 w-9 h-9">
        <Icons.Bell color="white" size={20} />
      </IconButton>
      <LinkButton href={"/en/cart"}>
        <Icons.CartIcon fill="white" />
      </LinkButton>
      <LinkButton href="/en/wishlist">
        <Icons.Heart color="white" size={20} />
      </LinkButton>
    </div>
  );
};

export default NavbarRightButtonGroup;
