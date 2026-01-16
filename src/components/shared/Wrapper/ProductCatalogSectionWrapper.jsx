"use client";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import CustomSelect from "@/components/ui/Select";
import { useRouter } from "next/navigation";

const ProductCatalogSectionWrapper = ({
  id = "",
  headerText = "",
  subText = "",
  showSubText = false,
  isButton = true,
  isSelect = false,
  headerClassName = "",
  buttonClassName = "",
  isBrand = false,
  children,
  clickHandler
}) => {
  const router = useRouter();
  return (
    <section className="w-full !space-y-7 container py-2" id={id}>
      <div className="w-full flex justify-between items-center category_navigation_slider_wrapper">
        <div className="flex flex-col gap-2.5">
          <h3
            className={
              headerClassName
                ? headerClassName
                : "text-sm md:text-base font-bold text-foreground"
            }
          >
            {headerText}
          </h3>
          {showSubText && (
            <h4 className="font-medium text-xs md:text-base text-text-payment-info">
              {subText}
            </h4>
          )}
        </div>
        {
          isBrand && <CustomButton
            className={
              buttonClassName
                ? buttonClassName
                : "min-h-7 h-7 bg-secondary text-white text-xs"
            }
            clickHandler={() => router.push("/en/vendor-list")}
          >
            View all
          </CustomButton>
        }
        {isButton && (
          <CustomButton
            className={
              buttonClassName
                ? buttonClassName
                : "min-h-7 h-7 bg-secondary text-white text-xs"
            }
            clickHandler={() => router.push("/en/product-list")}
          >
            View all
          </CustomButton>
        )}
        {isSelect && (
          <CustomSelect
            SIZE_CHART={[
              { key: "Newest", label: "Newest" },
              { key: "Popular", label: "Popular" },
              { key: "Most searched", label: "Most searched" },
            ]}
             label="Sort by:"
             defaultSelectedKeys={["Newest"]}
          />
        )}
      </div>
      {children}
    </section>
  );
};

export default ProductCatalogSectionWrapper;
