import styles from "../header.module.css";
import NavbarLeftContainer from "./NavbarLeftContainer";
import NavbarMainContainer from "./NavbarMainContainer";
import NavbarRightContainer from "./NavbarRightContainer";
const NavigationBar = () => {
    return (
        <nav className={`${styles.navbar}`}>
            <NavbarLeftContainer />
            <NavbarMainContainer />
            <NavbarRightContainer />
        </nav>
    )
}

export default NavigationBar;