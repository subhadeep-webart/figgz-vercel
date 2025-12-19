import { NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

function getLocale(request) {
    console.log("Request=====>", request);
    const acceptLang = request.headers.get("accept-language");

    if (!acceptLang) return defaultLocale;

    const preferred = acceptLang.split(",")[0].split("-")[0];

    return locales.includes(preferred) ? preferred : defaultLocale;
}

export function proxy(request) {
    const { pathname } = request.nextUrl;

    // Skip next internal files, api, static, images
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return;
    }

    const pathnameHasLocale = locales.some((locale) =>
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (pathnameHasLocale) return;

    const locale = getLocale(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(url);
}

export const config = {
    matcher: [
        "/((?!_next|favicon.ico|.*\\.).*)",
    ],
};
