import SearchBar from "@/components/ui/SearchBar";
import CategoryNavMenu from "../CategoryNavMenu";
import NavigationBar from "./NavigationBar";
import DeliverToSelect from "../Select/DeliverToSelect";
import { Divider } from "@heroui/react";

const Header = () => {
  return (
    <header className="w-full flex flex-col gap-5 !py-4">
      <div className="container">
        <NavigationBar />
      </div>
      <div className="container lg:hidden">
        <SearchBar />
      </div>
      
      <CategoryNavMenu />
      <div className="container flex flex-col gap-5 md:hidden">
              <Divider />
        <DeliverToSelect />
      </div>
    </header>
  );
};

export default Header;
