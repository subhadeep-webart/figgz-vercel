"use client";

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

const AddBankModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <CustomButton
        className="bg-primary text-raisin text-sm font-medium md:w-36 w-28 md:!py-2.5 hidden md:block"
        clickHandler={onOpen}
      >
        Add Bank
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
            <span className="block text-center w-full">Enter Bank Details</span>
            <button
              onClick={onClose}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground hover:text-foreground font-bold"
            >
              <Icons.X size={24} />
            </button>
          </ModalHeader>
          <ModalBody className="w-full">
            <div className="grid grid-cols-1 gap-9">
              <InputField label="Bank Name" placeholder="Enter your name" />

              <InputField
                label="Account Holder Name"
                placeholder="Enter title"
              />
              <InputField label="Account Number" placeholder="Enter title" />
              <InputField
                label="Re-enter Account Numbe"
                placeholder="Enter title"
              />
              <InputField label="Routing Number" placeholder="Enter title" />
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

export default AddBankModal;
