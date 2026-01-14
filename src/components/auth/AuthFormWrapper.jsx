import styles from "./auth.module.css";
const AuthFormWrapper = ({ children }) => {
    return (
        <div className={styles.auth_wrapper}>
            {children}
        </div>
    )
}

export default AuthFormWrapper;