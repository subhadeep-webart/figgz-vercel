import { Icons } from "@/assets";
import IconButton from "../../Buttons/IconButton";

const CategoryDrawerCloseButton = ({ clickHandler }) => {
    return (
        <IconButton className="bg-secondary absolute top-6 right-6 h-10 w-10 rounded-md" clickHandler={clickHandler}>
            <Icons.X className="text-white" size={20} />
        </IconButton>
    )
}

export default CategoryDrawerCloseButton;