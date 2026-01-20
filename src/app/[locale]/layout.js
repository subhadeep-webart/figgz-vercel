// import { Poppins } from "next/font/google";
// import "../globals.css";
// import Provider from "../Providers";
// import Header from "@/components/shared/Header";
// import Footer from "@/components/shared/Footer";

// const poppins = Poppins({
//     subsets: ["latin"],
//     variable: "--font-poppins",
//     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// export const metadata = {
//     title: "Figgz",
//     description: "Market Place",
// };

// export default async function LocaleLayout({ children, params }) {
//     const { locale } = await params;
//     const dir = locale === "ar" ? "rtl" : "ltr";
//     return (
//         <html lang={locale} dir={dir}>
//             <body className={poppins.variable}>
//                 <Provider>
//                     <Header />
//                     {children}
//                     <Footer />
//                 </Provider>
//             </body>
//         </html>
//     );
// }

import { Poppins } from "next/font/google";
import "../globals.css";
import Provider from "../Providers";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import DropdownProvider from "@/components/shared/DropdownProvider";
import BodyWrapper from "@/components/shared/BodyWrapper";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "Figgz",
    description: "Market Place",
};

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    const dir = locale === "ar" ? "rtl" : "ltr";
    return (
        <html lang={locale} dir={dir}>
            <body className={poppins.variable}>
                <Provider>
                    <DropdownProvider>
                        <Header />
                        <BodyWrapper>
                            {children}
                            <Footer />
                        </BodyWrapper>
                    </DropdownProvider>
                </Provider>
            </body>
        </html>
    );
}

