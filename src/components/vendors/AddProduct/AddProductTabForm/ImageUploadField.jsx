"use client";

import Image from "next/image";
import { Icons, PUBLIC_IMAGES } from "@/assets";

const ImageUploadField = () => {
  return (
    <div className="w-full">
      <h4 className="font-semibold text-sm text-black !mb-3">Upload Image</h4>

      <div className="border border-dashed border-gray-300 rounded-md !p-6 flex flex-col items-center justify-center text-center gap-3">
        <div className="font-medium text-sm text-gray-700 flex gap-2">
          <Icons.UploadCloud size={22} className="text-gray-500" /> Upload
          Product
        </div>

        <p className="text-xs text-gray-400">
          Accept Images, Videos or 3D Models
        </p>
      </div>

      <div className="flex gap-3 !mt-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="relative w-12 h-11 rounded-md bg-gray-200 overflow-hidden"
          >
            <Image
              src={PUBLIC_IMAGES.OrderInfoShoe}
              alt="product"
              fill
              className="object-cover"
            />

            <button
              type="button"
              className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center text-xs shadow"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadField;
