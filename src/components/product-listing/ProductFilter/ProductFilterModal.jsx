"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import ProductFilterAccordion from "./ProductFilterAccordion";

const ProductFilterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton
        className="bg-transparent border border-image-wrapper "
        clickHandler={onOpen}
      >
        <Icons.ChartNoAxesGantt color="#1B3042" size={20} />
      </CustomButton>

      <Modal
        isOpen={isOpen}
        size="sm"
        radius="md"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
        scrollBehavior="inside"
      >
        <ModalContent className="!py-2 !px-2">
          <ModalHeader className="relative text-xl font-medium text-product-text-base !mb-8">
            <button
              onClick={onClose}
              className="absolute right-0 top-[10px] -translate-y-1/2 text-foreground hover:text-foreground font-bold"
            >
              <Icons.X size={24} />
            </button>
          </ModalHeader>
          <ModalBody className="w-full">
            <div className="flex justify-between">
              <p className="text-sm text-foreground font-bold">Fulfilled by</p>
              <Icons.RotateCw className="text-foreground" size={18} />
            </div>
            <div className="">
                <ProductFilterAccordion/>
            </div>
          </ModalBody>
          {/* <ModalFooter className="flex items-center justify-between !mt-6">
              
              </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductFilterModal;
