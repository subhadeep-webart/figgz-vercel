import CustomBadge from "@/components/ui/Badges/CustomBadge";
import { Icons } from "@/assets";
const BestSellerBadge = ({ className }) => {
    return (
        <CustomBadge className={className}>
            <div className="flex justify-center items-center w-full gap-1 !px-3">
                <Icons.CrownIcon fill="white" size={18}/>
                <p className="text-xs text-white font-normal hidden md:block">Best Seller</p>
            </div>
        </CustomBadge>
    )
}

export default BestSellerBadge;