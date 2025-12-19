"use client"

import NavbarRightButtonGroup from "./NavbarRightButtonGroup";
import NavbarRightAuthButtonGroup from "./NavbarRightAuthButtonGroup";
import styles from "../header.module.css";

const NavbarRightContainer = () => {
    return (
        <div className={styles.navbar_right}>
            <NavbarRightButtonGroup />
            <NavbarRightAuthButtonGroup/>
        </div>
    )
}

export default NavbarRightContainer;