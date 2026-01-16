export const removeLocale = (pathname) => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0 && segments[0].length === 2) {
        return "/" + segments.slice(1).join("/");
    }

    return pathname;
};
