"use client"

import NavbarRightButtonGroup from "./NavbarRightButtonGroup";
import NavbarRightAuthButtonGroup from "./NavbarRightAuthButtonGroup";
import styles from "../header.module.css";
import ProfileHeaderDropdown from "../ProfileHeaderDropdown";

const NavbarRightContainer = () => {
    return (
        <div className={styles.navbar_right}>
            <NavbarRightButtonGroup />
            <NavbarRightAuthButtonGroup/>
            {/* <ProfileHeaderDropdown/> */}
        </div>
    )
}

export default NavbarRightContainer;