import SearchBar from "@/components/ui/SearchBar";
import styles from "../header.module.css";
const NavbarMainContainer = () => {
    return (
        <div className={styles.navbar_main}>
            <SearchBar />
        </div>
    )
}

export default NavbarMainContainer;