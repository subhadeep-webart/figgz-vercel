"use client"
import { store } from "@/redux/store/store";
import { HeroUIProvider } from "@heroui/react";
import { Provider } from "react-redux";
const Providers = ({ children }) => {
    return (
        <HeroUIProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </HeroUIProvider>
    )
}

export default Providers;