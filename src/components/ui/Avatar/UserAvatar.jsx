import Image from "next/image";
import styles from "./avatar.module.css";
import { PUBLIC_IMAGES } from "@/assets";
const UserAvatar = () => {
    return (
        <div className={styles.user_avatar_wrappper}>
            <Image src={PUBLIC_IMAGES.Avatar} alt="User Avatar" className="rounded-full" fill />
        </div>
    )
}

export default UserAvatar;