"use client";

import { Icons, PUBLIC_IMAGES } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import CartProductInformation from "@/components/ui/Cards/ShoppingCartCard/CartProductInformation";
import ProductModifierContainer from "@/components/ui/Cards/ShoppingCartCard/ProductModifierContainer";
import SingleImageCard from "@/components/ui/Cards/SingleImageCard";
import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import SizeChartTable from "./SizeChartTable";

const SizeChartModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton
        className="bg-transparent border-1 border-border-product-filter w-24 lg:w-28 h-6 lg:h-8"
        clickHandler={onOpen}
      >
        <Icons.ChartIcon />
        <span className="text-border-product-filter text-[10px] lg:text-sm font-medium">
          Size Chart
        </span>
      </CustomButton>

      <Modal
        isOpen={isOpen}
        size="4xl"
        radius="md"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
        scrollBehavior="inside"
      >
        <ModalContent className="!py-11 !px-20">
          <ModalHeader className="relative text-xl font-medium text-product-text-base !mb-8">
            <div className="w-full flex justify-start items-start gap-6">
              <SingleImageCard
                className={"h-36 w-28 bg-white"}
                imageWrapperClass={"h-28"}
                imageClass={"h-28"}
              />
              <div className="w-full flex flex-col items-start gap-3.5 !mb-10">
                <CartProductInformation />
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute right-0 top-[10px] -translate-y-1/2 text-foreground hover:text-foreground font-bold"
            >
              <Icons.X size={24} />
            </button>
          </ModalHeader>
          <ModalBody className="w-full flex flex-col gap-8">
            <Divider />
            <h3 className="text-3xl font-medium text-product-text-base">
              Size Chart
            </h3>
            <SizeChartTable />
            <h3 className="text-3xl font-medium text-product-text-base">
              How To Measure
            </h3>
            <img src={PUBLIC_IMAGES.MeasurementImg} className="w-[353px]" />
          </ModalBody>
          <ModalFooter className="flex items-center justify-between !mt-6">
            <CustomButton
              className="text-lg font-medium w-[319px] h-14"
              clickHandler={onClose}
            >
              <Icons.CartIcon /> Add To Cart
            </CustomButton>
            <CustomButton
              className="text-lg font-medium w-[274px] h-14 border border-secondary bg-transparent"
              clickHandler={onClose}
            >
              <Icons.Heart /> Wish list
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SizeChartModal;
