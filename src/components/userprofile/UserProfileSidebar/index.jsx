import styles from "./sidebar.module.css"
import UserSidebarMenuList from "./UserSidebarMenuList";
const UserProfileSidebar = () => {
    return (
        <div className={styles.sidebar_wrapper}>
            <UserSidebarMenuList />
        </div>
    )
}

export default UserProfileSidebar;