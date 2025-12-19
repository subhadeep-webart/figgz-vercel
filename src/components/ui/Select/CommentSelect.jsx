import { Select, SelectItem } from "@heroui/react";

const CommentSelect = () => {
  return (
    <Select
      placeholder="Show Comments"
      radius="full"
      classNames={{
        trigger:
          "bg-white shadow-none border border-[#FEA800] rounded-full " +
          "!px-5 !py-3 h-[55px] " +
          "data-[hover=true]:bg-white data-[focus=true]:bg-white data-[open=true]:bg-white data-[filled=true]:bg-white",
        value: "text-black font-medium text-sm",
        popoverContent: "text-black",
      }}
    >
      <SelectItem key="comment1">Comment1</SelectItem>
      <SelectItem key="comment2">Comment2</SelectItem>
      <SelectItem key="comment3">Comment3</SelectItem>
    </Select>
  );
};

export default CommentSelect;
