import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import OrderHistoryCard from "@/components/ui/Cards/OrderHistoryCard";
import SingleImageCard from "@/components/ui/Cards/SingleImageCard";
import CustomChip from "@/components/ui/CustomChip";
import TableWrapper from "@/components/ui/Tables/components/TableWrapper";
import { ORDER_HISTORY_TABLE_HEADER } from "@/constants";
import { cn } from "@heroui/react";

const UserOrderHistorySection = ({ bgClassName, className }) => {
  return (
    <TableWrapper>
      <div className="w-full  rounded-2xl overflow-hidden !mb-9">
        <div className={cn("bg-order-table-header", bgClassName)}>
          <div className="grid grid-cols-4">
            {ORDER_HISTORY_TABLE_HEADER?.map((header, index) => (
              <div
                key={`order_table_header-${index + 1}`}
                className={cn(
                  "!py-4 !px-6 text-left font-normal text-lg text-product-text-base",
                  className
                )}
              >
                {header?.headerName}
              </div>
            ))}
          </div>
        </div>

        <div className="border-x border-b border-secondary rounded-b-2xl bg-white">
          <div className="grid grid-cols-4 text-product-text-info">
            <div className="!py-4 !px-6 text-left font-normal text-lg">
              25477888
            </div>

            <div className="!py-4 !px-6 text-left font-normal text-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Icons.CardIcon size={18} />
                  Credit Card
                </div>
                <span className="text-sm text-product-text-base font-medium">
                  **** **** **** 2547
                </span>
              </div>
            </div>

            <div className="!py-4 !px-6 text-left font-normal text-lg">
              #91021547
            </div>

            <div className="!py-4 !px-6 text-left font-normal text-lg">
              24 April 2025
            </div>
          </div>

          <div className="!px-9 !py-2.5">
            <div className="w-full !px-8 !py-3.5 border border-image-wrapper bg-shopping-cart rounded-2xl flex items-start justify-between gap-6">
              <SingleImageCard
                className="h-36 w-44 bg-white flex-shrink-0"
                imageWrapperClass="h-32"
                imageClass="h-32"
              />
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="font-medium text-lg text-product-text-base">
                    adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black,
                    Size 8
                  </p>
                  <span className="font-semibold text-lg">$20.00</span>
                </div>

                <div className="flex justify-between">
                  <p className="text-product-text-info text-base mt-1">
                    Vorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                  <Icons.ChevronRight size={22} />
                </div>
              </div>
            </div>
          </div>

          <div className="!px-6 !py-4 ">
            <div className="flex justify-between items-center">
              <CustomChip
                className="h-9 border border-border-on-the-way text-border-on-the-way !px-5 "
                variant="bordered"
              >
                <div className="flex items-center justify-center">
                  <Icons.DeliveryParcelIcon size={22} color="#EC9C00" /> On The
                  Way
                </div>
              </CustomChip>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 !mt-[-26px] !mr-[56px]">
          <CustomChip
            className="h-12 border border-secondary text-secondary !px-14 bg-white"
            variant="bordered"
          >
            Track
          </CustomChip>
          <CustomButton className="!px-9 h-12 text-secondary font-medium text-base">
            <span className="underline">Download Invoice</span>
          </CustomButton>
        </div>
      </div>

      <OrderHistoryCard/>
      <OrderHistoryCard/>
      <OrderHistoryCard/>
    </TableWrapper>
  );
};

export default UserOrderHistorySection;
