import React from "react";
import { useScreenSize } from "@/hooks/useScreenSize";

const responsiveStyles = {
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold",
    h2: "text-2xl sm:text-3xl md:text-4xl font-semibold",
    h3: "text-xl sm:text-2xl md:text-3xl font-semibold",
    h4: "text-lg sm:text-2xl md:text-3xl font-semibold",
    p: "text-base sm:text-lg md:text-xl leading-relaxed",
    img: "w-full h-auto object-cover",
    input: "w-full p-2 border rounded-md",
    textarea: "w-full p-2 border rounded-md",
    button: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition",
    label: "text-base sm:text-lg md:text-xl font-medium",
    span: "text-base sm:text-lg md:text-xl",
    svg: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10",
    div: "w-full",
    default: "w-full",
};

const makeResponsive = (children) => {
    return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const type = typeof child.type === "string" ? child.type : null;

        const childClass = responsiveStyles[type] || responsiveStyles.default;

        const nestedChildren =
        child.props.children && typeof child.props.children !== "string"
            ? makeResponsive(child.props.children)
            : child.props.children;

        return React.cloneElement(child, {
            className: `${child.props.className || ""} ${childClass}`,
            children: nestedChildren,
        });
    });
};

const AppLayout = ({
    children,
    className = "",
    disablePadding = false,
    disableContainer = false,
    centered = true,
    padding,
    maxWidth,
}) => {
    const { screen, isMobile, isTablet, isDesktop } = useScreenSize();

    const responsivePadding =
        padding ||
        (disablePadding
        ? ""
        : isMobile
        ? "px-4"
        : isTablet
        ? "px-6"
        : "px-12");

    const responsiveMaxWidth =
        maxWidth ||
        (disableContainer
        ? ""
        : screen === "2xl"
        ? "max-w-[1600px]"
        : screen === "xl"
        ? "max-w-[1400px]"
        : screen === "lg"
        ? "max-w-[1200px]"
        : screen === "md"
        ? "max-w-[960px]"
        : screen === "sm"
        ? "max-w-[640px]"
        : "max-w-full");

    return (
        <div className="relative w-full min-h-screen">
            <div
                className={`
                    w-full
                    transition-all
                    duration-300
                    ${centered && !disableContainer ? "mx-auto" : ""}
                    ${responsivePadding}
                    ${responsiveMaxWidth}
                    ${className}
                `}
            >
                <div className="w-full max-w-full space-y-4">
                    {makeResponsive(children)}
                </div>
            </div>
        </div>
    );
};

export default AppLayout;