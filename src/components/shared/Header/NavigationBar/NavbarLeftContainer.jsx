import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import styles from "../header.module.css";
import DeliverToSelect from "../../Select/DeliverToSelect";
import LanguageSelect from "../../Select/LanguageSelect";
import Link from "next/link";
import LinkButton from "@/components/ui/Buttons/LinkButton";

const NavbarLeftContainer = () => {
    return (
        <div className={styles.navbar_left}>
            <Link href="/en" className="inline-block">
                <div className="relative w-[142px] h-[52px]">
                    <Image
                        src={PUBLIC_IMAGES.Logo}
                        alt="Figgz Logo"
                        fill
                        style={{ objectFit: "contain" }} // keep aspect ratio
                    />
                </div>
            </Link>
            <DeliverToSelect />
            <LanguageSelect />
        </div>
    )
}

export default NavbarLeftContainer;