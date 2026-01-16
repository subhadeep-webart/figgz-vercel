import OtpVerificationForm from "@/components/ui/forms/auth/OtpVerificationForm";
import AccountVerificationForm from "@/components/ui/forms/auth/VendorSignupFormGroup/AccountVerificationForm";
import AddressDetailsForm from "@/components/ui/forms/auth/VendorSignupFormGroup/AddressDetailsForm";
import BankDetailsForm from "@/components/ui/forms/auth/VendorSignupFormGroup/BankDetailsForm";
import BusinessDetailsForm from "@/components/ui/forms/auth/VendorSignupFormGroup/BusinessDetailsForm";
import MembershipForm from "@/components/ui/forms/auth/VendorSignupFormGroup/MembershipForm";
import StoreDetailsForm from "@/components/ui/forms/auth/VendorSignupFormGroup/StoreDetailsForm";
import UploadDocumentsForm from "@/components/ui/forms/auth/VendorSignupFormGroup/UploadDocumentsForm";

export const VENDOR_AUTH_FORM_STEP = [
  {
    href: "/vendor-signup/business-details",
    Component: BusinessDetailsForm,
  },
  {
    href: "/vendor-signup/address-details",
    Component: AddressDetailsForm,
  },
  {
    href: "/vendor-signup/upload-document",
    Component: UploadDocumentsForm,
  },
  {
    href: "/vendor-signup/store-details",
    Component: StoreDetailsForm,
  },
  {
    href: "/vendor-signup/bank-details",
    Component: BankDetailsForm,
  },

  {
    href: "/vendor-signup/otp-verification",
    Component: OtpVerificationForm,
  },
  {
    href: "/vendor-signup/membership",
    Component: MembershipForm,
  },
   {
    href: "/vendor-signup/account-verification",
    Component: AccountVerificationForm,
  },
];

export const RECENT_ORDER_TABLE_HEADER = [
  {
    key: "customer",
    label: "Customer",
  },
  {
    key: "items",
    label: "Items",
  },
  {
    key: "order_price",
    label: "Order Price",
  },
  {
    key: "address",
    label: "Address",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "action",
    label: "Action",
  },
];

export const ALL_PRODUCT_TABLE_HEADER = [
  {
    key: "product",
    label: "Product",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "views",
    label: "Views",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "profit",
    label: "Pofit",
  },
  {
    key: "inventory",
    label: "Inventory",
  },
  {
    key: "category",
    label: "Category",
  },
];

export const ALL_INVOICES_TABLE_HEADER = [
  {
    key: "ID",
    label: "ID",
  },
  {
    key: "invoice_for",
    label: "Invoice For",
  },
  {
    key: "order",
    label: "Order",
  },
  {
    key: "payment_type",
    label: "Payment Type",
  },
  {
    key: "amount",
    label: "Amount",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "action",
    label: "Action",
  },
];

export const RETURNED_PRODUCTS_TABLE_HEADER = [
  { key: "ID", label: "ID" },
  { key: "order_number", label: "Order Number" },
  { key: "product_name", label: "Product Name" },
  { key: "customer", label: "Customer" },
  { key: "return_date", label: "Return Date" },
  { key: "reason", label: "Reason for Return" },
  { key: "status", label: "Status" },
];

export const ALL_COUPONS_TABLE_HEADER = [
  { key: "code", label: "Code" },
  { key: "coupon_type", label: "Coupon type" },
  { key: "coupon_amount", label: "Coupon amount" },
  { key: "description", label: "Description" },
  { key: "product_ids", label: "Product IDs" },
  { key: "usage_limit", label: "Usage / Limit" },
  { key: "expiry_date", label: "Expiry date" },
];

export const ALL_REWARDS_TABLE_HEADER = [
  { key: "reward_name", label: "Reward Name" },
  { key: "description", label: "Description" },
  { key: "eligibility_date", label: "Eligibility Date" },
  { key: "status", label: "Status" },
  { key: "reward_value", label: "Reward Value" },
];
