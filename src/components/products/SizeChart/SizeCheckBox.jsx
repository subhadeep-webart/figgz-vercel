"use client"

import { useCheckbox, Chip, VisuallyHidden, tv } from "@heroui/react";
import Link from "next/link";

const SizeCheckBox = ({size}) => {
    // const checkbox = tv({
    //     slots: {
    //         base: " !rounded-lg",
    //         content: "text-black !px-4 !py-2",
    //     },
    //     variants: {
    //         isSelected: {
    //             true: {
    //                 base: "border-1 border-seconday bg-white/20 hover:bg-white hover:border-border-size-color",
    //                 content: "text-secondary !px-4 !py-2",
    //             },
    //         },
    //         isFocusVisible: {
    //             true: {
    //                 base: "outline-solid outline-transparent ring-2 ring-focus ring-offset-2 ring-offset-background",
    //             },
    //         },
    //     },
    // });

    return(
        <Link className="flex justify-center items-center w-12 h-9 rounded-lg border-1 border-border-size-color bg-white hover:bg-white/20 text-black" href={"#"}>
            <span className="">{size}</span>
        </Link>
    )
  
};

export default SizeCheckBox