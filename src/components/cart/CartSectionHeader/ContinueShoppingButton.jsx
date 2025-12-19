import { Icons } from "@/assets";
import Link from "next/link";

const ContinueShoppingButton = ({ href = "#" }) => {
    return (
        <Link href={href} className="flex justify-end items-center gap-2">
            <span className="text-secondary font-medium text-sm">Continue Shopping</span>
            <Icons.ChevronRight size={20} className="text-secondary" />
        </Link>
    )
}

export default ContinueShoppingButton;