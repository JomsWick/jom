import { useEffect, useState } from "react";

const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

const getScreenSize = (width) => {
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "xs";
};

export const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [screen, setScreen] = useState(getScreenSize(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            setScreen(getScreenSize(newWidth));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        width,
        screen,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
    };
};