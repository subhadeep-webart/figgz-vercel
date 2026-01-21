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
    flag: "https://flagcdn.com/jo.svg",
  },
];
export const LANGUAGE_LIST = [
  {
    key: "english",
    label: "English",
    name: "English",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    key: "arabic",
    label: "Arabic",
    name: "Arabic",
    flag: "https://flagcdn.com/ae.svg",
  },
];
export const CATEGORIES = [
  {
    name: "Electronics",
    subMenus: [
      {
        title: "Mobiles & Tablets",
        items: ["Smartphones", "Tablets", "Power Banks", "Mobile Accessories"],
      },
      {
        title: "Computers",
        items: ["Laptops", "Desktops", "Monitors", "Keyboards", "Mouse"],
      },
      {
        title: "Audio",
        items: ["Headphones", "Earbuds", "Speakers", "Soundbars"],
      },
      {
        title: "Cameras",
        items: ["DSLR", "Mirrorless", "Action Cameras", "Lenses"],
      },
    ],
    topBrands: [
      { name: "Apple", logo: "/images/logo/figzz_logo.svg" },
      { name: "Samsung", logo: "/images/logo/figzz_logo.svg" },
      { name: "Sony", logo: "/images/logo/figzz_logo.svg" },
      { name: "HP", logo: "/images/logo/figzz_logo.svg" },
    ],
  },
  {
    name: "Men's Fashion",
    subMenus: [
      {
        title: "Clothing",
        items: ["T-Shirts", "Shirts", "Jeans", "Trousers", "Jackets & Hoodies"],
      },
      {
        title: "Footwear",
        items: [
          "Casual Shoes",
          "Sports Shoes",
          "Formal Shoes",
          "Sandals & Slippers",
        ],
      },
      {
        title: "Accessories",
        items: ["Watches", "Belts", "Wallets", "Caps & Hats", "Sunglasses"],
      },
      {
        title: "Ethnic Wear",
        items: ["Kurtas", "Nehru Jackets", "Sherwanis", "Ethnic Sets"],
      },
    ],
    topBrands: [
      { name: "Nike", logo: "/images/logo/figzz_logo.svg" },
      { name: "Adidas", logo: "/images/logo/figzz_logo.svg" },
      { name: "Levi's", logo: "/images/logo/figzz_logo.svg" },
      { name: "Puma", logo: "/images/logo/figzz_logo.svg" },
    ],
  },
  {
    name: "Women's Fashion",
    subMenus: [
      {
        title: "Spring / Summer",
        items: ["Tops", "Dresses", "Pants", "Sandals", "Skirts", "Swimwear"],
      },
      {
        title: "Clothing",
        items: [
          "Tops",
          "Dresses",
          "Pants",
          "Abayas & Jalabiyas",
          "Jeans",
          "Jumpsuits",
          "Sportswear",
        ],
      },
      {
        title: "Footwear",
        items: [
          "Sports shoes",
          "Sneakers",
          "Sandals",
          "Heels",
          "Flats",
          "Boots",
          "Flip flops",
          "Slides",
        ],
      },
      {
        title: "Bags & Accessories",
        items: [
          "Backpacks",
          "Handbags",
          "Luggage",
          "Wallets",
          "Jewelry",
          "Watches",
          "Eyewear",
        ],
      },
    ],
    topBrands: [
      { name: "Apple", logo: "/images/logo/figzz_logo.svg" },
      { name: "Samsung", logo: "/images/logo/figzz_logo.svg" },
      { name: "Sony", logo: "/images/logo/figzz_logo.svg" },
      { name: "LG", logo: "/images/logo/figzz_logo.svg" },
    ],
  },
  {
    name: "Kid's Fashion",
    subMenus: [
      {
        title: "Spring / Summer",
        items: ["Tops", "Dresses", "Pants", "Sandals", "Skirts", "Swimwear"],
      },
      {
        title: "Clothing",
        items: [
          "Tops",
          "Dresses",
          "Pants",
          "Abayas & Jalabiyas",
          "Jeans",
          "Jumpsuits",
          "Sportswear",
        ],
      },
      {
        title: "Footwear",
        items: [
          "Sports shoes",
          "Sneakers",
          "Sandals",
          "Heels",
          "Flats",
          "Boots",
          "Flip flops",
          "Slides",
        ],
      },
      {
        title: "Bags & Accessories",
        items: [
          "Backpacks",
          "Handbags",
          "Luggage",
          "Wallets",
          "Jewelry",
          "Watches",
          "Eyewear",
        ],
      },
    ],
    topBrands: [
      { name: "Apple", logo: "/images/logo/figzz_logo.svg" },
      { name: "Samsung", logo: "/images/logo/figzz_logo.svg" },
      { name: "Sony", logo: "/images/logo/figzz_logo.svg" },
      { name: "LG", logo: "/images/logo/figzz_logo.svg" },
    ],
  },
  {
    name: "Beauty",
    subMenus: [
      {
        title: "Makeup",
        items: ["Face Makeup", "Eyes Makeup", "Lipsticks", "Nail Products"],
      },
      {
        title: "Skincare",
        items: [
          "Moisturizers",
          "Cleansers",
          "Serums",
          "Sunscreen",
          "Face Masks",
        ],
      },
      {
        title: "Hair Care",
        items: ["Shampoo", "Conditioner", "Hair Oil", "Hair Styling"],
      },
      {
        title: "Fragrances",
        items: ["Perfumes", "Deodorants", "Body Mists"],
      },
    ],
    topBrands: [
      { name: "Lakmé", logo: "/images/logo/figzz_logo.svg" },
      { name: "Maybelline", logo: "/images/logo/figzz_logo.svg" },
      { name: "L'Oréal", logo: "/images/logo/figzz_logo.svg" },
      { name: "Nivea", logo: "/images/logo/figzz_logo.svg" },
    ],
  },
  {
    name: "Baby",
    subMenus: [
      {
        title: "Baby Care",
        items: [
          "Diapers & Wipes",
          "Baby Bath & Skin Care",
          "Baby Health",
          "Baby Grooming",
        ],
      },
      {
        title: "Feeding",
        items: [
          "Feeding Bottles",
          "Breast Pumps",
          "Baby Food",
          "Sippers & Cups",
        ],
      },
      {
        title: "Clothing",
        items: [
          "Baby Boy Clothing",
          "Baby Girl Clothing",
          "Winter Wear",
          "Baby Accessories",
        ],
      },
      {
        title: "Gear",
        items: ["Strollers", "Car Seats", "Carriers", "Baby Furniture"],
      },
    ],
    topBrands: [
      { name: "Pampers", logo: "/images/logo/figzz_logo.svg" },
      { name: "Johnson's", logo: "/images/logo/figzz_logo.svg" },
      { name: "Philips Avent", logo: "/images/logo/figzz_logo.svg" },
      { name: "Mee Mee", logo: "/images/logo/figzz_logo.svg" },
    ],
  },

  {
    name: "Toys",
    subMenus: [
      {
        title: "By Age",
        items: ["0–2 Years", "3–5 Years", "6–8 Years", "9–12 Years"],
      },
      {
        title: "Learning & Education",
        items: ["STEM Toys", "Puzzles", "Building Blocks", "Educational Games"],
      },
      {
        title: "Action & Play",
        items: ["Action Figures", "Remote Control Toys", "Outdoor Play"],
      },
      {
        title: "Dolls & Games",
        items: ["Dolls & Dollhouses", "Board Games", "Card Games"],
      },
    ],
    topBrands: [
      { name: "LEGO", logo: "/images/logo/figzz_logo.svg" },
      { name: "Hot Wheels", logo: "/images/logo/figzz_logo.svg" },
      { name: "Barbie", logo: "/images/logo/figzz_logo.svg" },
      { name: "Funskool", logo: "/images/logo/figzz_logo.svg" },
    ],
  },
  {
    name: "Sports & Outdoor",
    subMenus: [
      {
        title: "Sports",
        items: ["Cricket", "Football", "Badminton", "Gym Equipment"],
      },
      {
        title: "Fitness",
        items: ["Dumbbells", "Yoga Mats", "Resistance Bands", "Treadmills"],
      },
      {
        title: "Outdoor Adventure",
        items: ["Camping & Hiking", "Cycling", "Trekking Gear"],
      },
      {
        title: "Sportswear",
        items: ["Activewear", "Sports Shoes", "Track Pants"],
      },
    ],
    topBrands: [
      { name: "Decathlon", logo: "/images/logo/figzz_logo.svg" },
      { name: "Nike", logo: "/images/logo/figzz_logo.svg" },
      { name: "Adidas", logo: "/images/logo/figzz_logo.svg" },
      { name: "Puma", logo: "/images/logo/figzz_logo.svg" },
    ],
  },

  {
    name: "Kitchen",
    subMenus: [
      {
        title: "Cookware",
        items: ["Pots & Pans", "Pressure Cookers", "Non-Stick Cookware"],
      },
      {
        title: "Appliances",
        items: [
          "Mixer Grinders",
          "Microwave Ovens",
          "Air Fryers",
          "Coffee Makers",
        ],
      },
      {
        title: "Kitchen Tools",
        items: ["Knives & Choppers", "Utensils", "Graters & Peelers"],
      },
      {
        title: "Storage",
        items: ["Containers", "Water Bottles", "Lunch Boxes"],
      },
    ],
    topBrands: [
      { name: "Prestige", logo: "/images/logo/figzz_logo.svg" },
      { name: "Philips", logo: "/images/logo/figzz_logo.svg" },
      { name: "Pigeon", logo: "/images/logo/figzz_logo.svg" },
      { name: "Tupperware", logo: "/images/logo/figzz_logo.svg" },
    ],
  },

  {
    name: "Women's Fashion",
    subMenus: [
      {
        title: "Spring / Summer",
        items: ["Tops", "Dresses", "Pants", "Sandals", "Skirts", "Swimwear"],
      },
      {
        title: "Clothing",
        items: [
          "Tops",
          "Dresses",
          "Pants",
          "Abayas & Jalabiyas",
          "Jeans",
          "Jumpsuits",
          "Sportswear",
        ],
      },
      {
        title: "Footwear",
        items: [
          "Sports shoes",
          "Sneakers",
          "Sandals",
          "Heels",
          "Flats",
          "Boots",
          "Flip flops",
          "Slides",
        ],
      },
      {
        title: "Bags & Accessories",
        items: [
          "Backpacks",
          "Handbags",
          "Luggage",
          "Wallets",
          "Jewelry",
          "Watches",
          "Eyewear",
        ],
      },
    ],
    topBrands: [
      { name: "Apple", logo: "/images/logo/figzz_logo.svg" },
      { name: "Samsung", logo: "/images/logo/figzz_logo.svg" },
      { name: "Sony", logo: "/images/logo/figzz_logo.svg" },
      { name: "LG", logo: "/images/logo/figzz_logo.svg" },
    ],
  },
  {
    name: "Kid's Fashion",
  },
  {
    name: "Beauty",
    subMenus: [
      {
        title: "Makeup",
        items: ["Face Makeup", "Eyes Makeup", "Lipsticks", "Nail Products"],
      },
      {
        title: "Skincare",
        items: [
          "Moisturizers",
          "Cleansers",
          "Serums",
          "Sunscreen",
          "Face Masks",
        ],
      },
      {
        title: "Hair Care",
        items: ["Shampoo", "Conditioner", "Hair Oil", "Hair Styling"],
      },
      {
        title: "Fragrances",
        items: ["Perfumes", "Deodorants", "Body Mists"],
      },
    ],
    topBrands: [
      { name: "Lakmé", logo: "/images/logo/figzz_logo.svg" },
      { name: "Maybelline", logo: "/images/logo/figzz_logo.svg" },
      { name: "L'Oréal", logo: "/images/logo/figzz_logo.svg" },
      { name: "Nivea", logo: "/images/logo/figzz_logo.svg" },
    ],
  },
  {
    name: "Baby",
    subMenus: [
      {
        title: "Baby Care",
        items: [
          "Diapers & Wipes",
          "Baby Bath & Skin Care",
          "Baby Health",
          "Baby Grooming",
        ],
      },
      {
        title: "Feeding",
        items: [
          "Feeding Bottles",
          "Breast Pumps",
          "Baby Food",
          "Sippers & Cups",
        ],
      },
      {
        title: "Clothing",
        items: [
          "Baby Boy Clothing",
          "Baby Girl Clothing",
          "Winter Wear",
          "Baby Accessories",
        ],
      },
      {
        title: "Gear",
        items: ["Strollers", "Car Seats", "Carriers", "Baby Furniture"],
      },
    ],
    topBrands: [
      { name: "Pampers", logo: "/images/logo/figzz_logo.svg" },
      { name: "Johnson's", logo: "/images/logo/figzz_logo.svg" },
      { name: "Philips Avent", logo: "/images/logo/figzz_logo.svg" },
      { name: "Mee Mee", logo: "/images/logo/figzz_logo.svg" },
    ],
  },

  {
    name: "Toys",
    subMenus: [
      {
        title: "By Age",
        items: ["0–2 Years", "3–5 Years", "6–8 Years", "9–12 Years"],
      },
      {
        title: "Learning & Education",
        items: ["STEM Toys", "Puzzles", "Building Blocks", "Educational Games"],
      },
      {
        title: "Action & Play",
        items: ["Action Figures", "Remote Control Toys", "Outdoor Play"],
      },
      {
        title: "Dolls & Games",
        items: ["Dolls & Dollhouses", "Board Games", "Card Games"],
      },
    ],
    topBrands: [
      { name: "LEGO", logo: "/images/logo/figzz_logo.svg" },
      { name: "Hot Wheels", logo: "/images/logo/figzz_logo.svg" },
      { name: "Barbie", logo: "/images/logo/figzz_logo.svg" },
      { name: "Funskool", logo: "/images/logo/figzz_logo.svg" },
    ],
  },
];

export const ALL_CATEGORIES = [
  {
    category: "Trending",
    menuItems: [
      {
        menuName: "Best Seller",
        href: "#",
      },
      {
        menuName: "New Releases",
        href: "#",
      },
      {
        menuName: "Movers & Shakers",
        href: "#",
      },
      {
        menuName: "Brand & Dealers",
        href: "/en/deals-offer",
      },
    ],
  },
  {
    category: "Shop By Category",
    menuItems: [
      {
        menuName: "Electronics",
        href: "#",
      },
      {
        menuName: "Fashions",
        href: "#",
      },
      {
        menuName: "Books",
        href: "#",
      },
      {
        menuName: "Beauty",
        href: "#",
      },
      {
        menuName: "Car & Motorcycle",
        href: "#",
      },
    ],
  },
  {
    category: "Help & Settings",
    menuItems: [
      {
        menuName: "Your Account",
        href: "#",
      },
      {
        menuName: "Customer Service",
        href: "#",
      },
    ],
  },
];

export const SIZE_CHART = [42, 44, 46, 48, 50, 52, 54];

export const WOMENS_FASHION = [
  { categoryName: "Tops" },
  { categoryName: "Shoe" },
  { categoryName: "Bag" },
  { categoryName: "Pants" },
  { categoryName: "Shoe" },
  { categoryName: "Dresses" },
];

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
  },
];

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
  },
];

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
    headerName: "Status",
  },
];

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
];

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
];

export const PROFILE_DROPDOWN_MENU = [
  {
    name: "Upload Product",
    href: "#",
    key: "upload_product",
    color: "#505050",
  },
  {
    name: "Orders",
    href: "#",
    key: "orders",
    color: "#505050",
  },
  {
    name: "Settings",
    href: "#",
    key: "settings",
    color: "#ffa310",
  },
];
