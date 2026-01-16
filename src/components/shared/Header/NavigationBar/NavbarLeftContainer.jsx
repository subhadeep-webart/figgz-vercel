import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import styles from "../header.module.css";
import DeliverToSelect from "../../Select/DeliverToSelect";
import LanguageSelect from "../../Select/LanguageSelect";
import Link from "next/link";
import CategoryDrawer from "@/components/ui/DrawerComponent/CategoryDrawer";

const NavbarLeftContainer = () => {
    return (
        <div className={styles.navbar_left}>
            <div className="lg:hidden">
                <CategoryDrawer />
            </div>
            <Link href="/en" className="lg:inline-block">
                <div className="relative w-[100px] h-[30px] lg:w-[142px] lg:h-[52px]">
                    <Image
                        src={PUBLIC_IMAGES.Logo}
                        alt="Figgz Logo"
                        fill
                        style={{ objectFit: "contain" }} // keep aspect ratio
                    />
                </div>
            </Link>
            <div className="hidden md:block">
                <DeliverToSelect />
            </div>
            <div className="hidden md:block">
                <LanguageSelect />
            </div>
        </div>
    )
}

export default NavbarLeftContainer;