// import CategoryNavSlider from "@/components/ui/Caraousel/CategoryNavSlider";
// import CategoryDrawer from "@/components/ui/DrawerComponent/CategoryDrawer";
// import { CATEGORIES } from "@/constants";

// const CategoryNavMenu = () => {
//     return (
//         <section className="w-full flex justify-start items-center gap-11 container">
//             <div className="hidden lg:block">
//             <CategoryDrawer />
//             </div>
//             <div className="w-full flex justify-start items-center gap-2">
//                 <CategoryNavSlider data={CATEGORIES} />
//             </div>
//         </section>
//     )
// }

// export default CategoryNavMenu;

"use client";

import CategoryNavSlider from "@/components/ui/Caraousel/CategoryNavSlider";
import CategoryDrawer from "@/components/ui/DrawerComponent/CategoryDrawer";
import { CATEGORIES } from "@/constants";
import { useDropdown } from "../DropdownProvider";

const CategoryNavMenu = () => {
    const { setIsDropdownOpen } = useDropdown();

    return (
        <section className="w-full flex justify-start items-center gap-11 container">
            <div className="hidden lg:block">
                <CategoryDrawer />
            </div>
            <div className="w-full flex justify-start items-center gap-2">
                <CategoryNavSlider 
                    data={CATEGORIES} 
                    onDropdownOpen={setIsDropdownOpen}
                />
            </div>
        </section>
    );
};

export default CategoryNavMenu;