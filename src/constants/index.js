import { Icons } from "@/assets";

export const COUNTRY_LIST = [
    {
        key: "usa",
        label: "US",
        name: "United States",
        flag: "https://flagcdn.com/us.svg",
    },
    {
        key: "uae",
        label: "UAE",
        name: "United Arab Emirates",
        flag: "https://flagcdn.com/ae.svg",
    }
];

export const CATEGORIES = [
    {
        name: "Electronics",
    },
    {
        name: "Men's Fashion",
    },
    {
        name: "Women's Fashion",
    },
    {
        name: "Kid's Fashion",
    },
    {
        name: "Beauty",
    },
    {
        name: "Baby",
    },
    {
        name: "Toys",
    },
    {
        name: "Sports & Outdoor",
    },
    {
        name: "Kitchen",
    },
    {
        name: "Women's Fashion",
    },
    {
        name: "Kid's Fashion",
    },
    {
        name: "Beauty",
    },
    {
        name: "Baby",
    },
    {
        name: "Toys",
    },
]

export const ALL_CATEGORIES = [
    {
        category: "Trending",
        menuItems: [
            {
                menuName: "Best Seller"
            },
            {
                menuName: "New Releases"
            },
            {
                menuName: "Movers & Shakers"
            },
            {
                menuName: "Brand & Dealers"
            },
        ]
    },
    {
        category: "Shop By Category",
        menuItems: [
            {
                menuName: "Electronics"
            },
            {
                menuName: "Fashions"
            },
            {
                menuName: "Books"
            },
            {
                menuName: "Beauty"
            },
            {
                menuName: "Car & Motorcycle"
            }
        ]
    },
    {
        category: "Help & Settings",
        menuItems: [
            {
                menuName: "Your Account"
            },
            {
                menuName: "Customer Service"
            },
        ]
    }
]

export const SIZE_CHART = [42, 44, 46, 48, 50, 52, 54];

export const WOMENS_FASHION = [{ categoryName: "Tops" }, { categoryName: "Shoe" }, { categoryName: "Bag" }, { categoryName: "Pants" }, { categoryName: "Shoe" }, { categoryName: "Dresses" }]

export const USER_SIDEBAR_MENU = [
    {
        name: "Personal Info",
        Icon: Icons.UserRound,
        iconProps: { className: "text-sidebar-lucide", size: 30 },
        href: "/en/personal-info",
    },
    {
        name: "Order History",
        Icon: Icons.ClockFading,
        iconProps: { className: "text-sidebar-lucide", size: 30 },
        href: "/en/order-history",
    },
    {
        name: "Manage Address",
        Icon: Icons.HomeIcon,
        iconProps: {},
        href: "/en/manage-address",
    },
    {
        name: "Payment History",
        Icon: Icons.DollarIcon,
        iconProps: {},
        href: "/en/payment-history",
    },
    {
        name: "Manage Card",
        Icon: Icons.CardIcon,
        iconProps: {},
        href: "/en/manage-card",
    }
]

export const ORDER_HISTORY_TABLE_HEADER = [
    {
        headerName: "Order ID",
    },
    {
        headerName: "Payment Method",
    },
    {
        headerName: "Transaction Id",
    },
    {
        headerName: "Estimated Delivery Date",
    }
]

export const PAYMENT_HISTORY_TABLE_HEADER = [
    {
        headerName: "Order ID",
    },
    {
        headerName: "Payment Method",
    },
    {
        headerName: "Transaction Id",
    },
    {
        headerName: "Amount",
    },
    {
        headerName: "Status"
    }
]

export const COLOR_BG = ["#D9E0E6", "#F0E2DA", "#FDF7DF"];

export const VENDOR_SIDEBAR_MENU = [
    {
        name: "Dashboard",
        Icon: Icons.LayoutDashboard,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor",
    },
    {
        name: "Product",
        Icon: Icons.ListCheck,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor/all-products",
    },
    {
        name: "Orders",
        Icon: Icons.Box,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor/orders",
    },
    {
        name: "Reviews",
        Icon: Icons.File,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor/reviews",
    },
    {
        name: "Earnings",
        Icon: Icons.BadgeDollarSign,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor/earning",
    },
    {
        name: "Cupon Code",
        Icon: Icons.TicketCheck,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor/coupon",
    },
    {
        name: "Reward",
        Icon: Icons.Medal,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor/reward",
    },
    {
        name: "Shipping",
        Icon: Icons.Truck,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor/#",
    },
    {
        name: "Announcements",
        Icon: Icons.Megaphone,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor/announcements",
    },
    {
        name: "Returns",
        Icon: Icons.Undo2,
        iconProps: { className: "text-vendor-lucide", size: 18 },
        href: "/en/vendor/returns",
    },
]

export const ORDER_CONFIRMED_HISTORY_TABLE_HEADER = [
    {
        headerName: "Order ID",
    },
    {
        headerName: "Payment Method",
    },
    {
        headerName: "Transaction Id",
    },
    {
        headerName: "Estimated Delivery Date",
    },
    {
        headerName: " ",
    },
]

export const PROFILE_DROPDOWN_MENU = [{
    name: "Upload Product",
    href: "#",
    key: "upload_product",
    color: "#505050"
},
{
    name: "Orders",
    href: "#",
    key: "orders",
    color: "#505050"
},
{
    name: "Settings",
    href: "#",
    key: "settings",
    color: "#ffa310"
}]


