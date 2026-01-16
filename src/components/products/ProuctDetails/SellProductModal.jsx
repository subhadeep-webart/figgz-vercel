import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

const SellProductModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton
        className="w-full bg-trasparent text-seondary h-10 border border-secondary font-medium text-xs lg:text-sm rounded-4xl"
        clickHandler={onOpen}
      >
        Sell This Product
      </CustomButton>

      <Modal
        isOpen={isOpen}
        size="xl"
        radius="md"
        backdrop="opaque"
        onClose={onClose}
        hideCloseButton={true}
      >
        <ModalContent className="!py-11 !px-20">
          <ModalHeader className="relative text-xl font-medium text-product-text-base !mb-8">
            <span className="block text-center w-full">
              Enter Details To Sell Products
            </span>
            <button
              onClick={onClose}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground hover:text-foreground font-bold"
            >
              <Icons.X size={24} />
            </button>
          </ModalHeader>
          <ModalBody className="w-full">
            <div className="grid grid-cols-1 gap-9">
              <InputField
                label="Enter Your Price"
                placeholder="Enter your name"
              />

              <InputField
                label="Enter Your Discount"
                placeholder="Enter title"
              />
              <InputField
                label="Enter Your  Quantity"
                placeholder="Enter title"
              />
              <InputField
                label="Upload Invoice"
                placeholder="Enter title"
                type="file"
                endContent={<Icons.Upload size={24} className="text-black" />}
              />
            </div>
          </ModalBody>
          <ModalFooter className="flex items-center justify-center !mt-6">
            <CustomButton
              className="text-lg font-medium w-72 h-14"
              clickHandler={onClose}
            >
              Submit For Verification
            </CustomButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SellProductModal;
