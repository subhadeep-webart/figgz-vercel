import { Avatar } from "@heroui/react";

const SelectCountryDisplay = ({ icon, text = "" }) => {
  return (
    <div className="flex gap-2 items-center py-2">
      {icon && (
        <Avatar alt={text} className="shrink-0 w-5 h-5" size="sm" src={icon} />
      )}
      {text && <span>{text}</span>}
    </div>
  );
};

export default SelectCountryDisplay;
