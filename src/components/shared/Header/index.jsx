import CategoryNavMenu from "../CategoryNavMenu";
import NavigationBar from "./NavigationBar";

const Header = () => {
    return (
        <header className="w-full flex flex-col gap-5 !py-4">
            <div className="container">
                <NavigationBar />
            </div>
            <CategoryNavMenu />
        </header>
    )
}

export default Header;