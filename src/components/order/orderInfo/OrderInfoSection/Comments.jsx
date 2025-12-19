"use client";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import CommentInput from "@/components/ui/InputField/CommentInput";
import CommentSelect from "@/components/ui/Select/CommentSelect";
import { Input, Select, SelectItem } from "@heroui/react";
export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];
const Comments = () => {
  return (
    <div className="!px-[51px] !mt-[-24px]">
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
      <CommentInput />
      </div>
      <div className="col-span-2">
      <CustomButton className="h-[52px] text-[#000000] !px-11">
        Submit
      </CustomButton>
      </div>
      <div className="col-span-3">
      <CommentSelect />
      </div>
      </div>
    </div>
  );
};

export default Comments;
