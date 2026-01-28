"use client";
import { Icons } from "@/assets";
import InputField from "@/components/ui/InputField";
import { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { HexColorPicker } from "react-colorful";

const {
  default: VendorDashboardTableWrapper,
} = require("@/components/shared/Wrapper/VendorDashboardTableWrapper");
const { default: SelectField } = require("@/components/ui/Select/SelectField");

const VarientForm = () => {
  const [color, setColor] = useState("#aabbcc");
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <VendorDashboardTableWrapper>
      <h3 className="font-semibold text-sm md:text-lg text-avatar-heading !mb-4">
        Variants
      </h3>
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row  gap-6">
            <div className="md:w-[50%] w-full">
              <label className="font-semibold text-sm text-[#000000]">
                Size
              </label>
              <SelectField
                placeholder="Choose a Size"
                options={[
                  { label: "Status1", value: "status1" },
                  { label: "Status2", value: "status2" },
                ]}
              />
            </div>
            <div className="md:w-[50%] w-full">
              <label className="font-semibold text-sm text-[#000000]">
                Material
              </label>
              <SelectField
                placeholder="Choose a Material"
                options={[
                  { label: "Status1", value: "status1" },
                  { label: "Status2", value: "status2" },
                ]}
              />
            </div>
          </div>
          <InputField
            label="Color"
            placeholder="Choose Color"
            endContent={
              <span
                onClick={() => setShowPicker((prev) => !prev)}
                className="cursor-pointer"
              >
                <Icons.Pen size={20} />
              </span>
            }
          />

          {showPicker && (
            <div ref={pickerRef} className="absolute z-50 right-[20%] mt-2">
              <SketchPicker
                color={color}
                onChange={(updatedColor) => setColor(updatedColor.hex)}
              />
            </div>
          )}
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default VarientForm;
