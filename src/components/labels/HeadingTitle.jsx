import React from "react";

const HeadingTitle = ({ title, children, level = 6, className = "" }) => {
    const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}`;
    const sizeClasses = {
        1: "text-4xl sm:text-5xl",
        2: "text-3xl sm:text-4xl",
        3: "text-2xl sm:text-3xl",
        4: "text-xl sm:text-2xl",
        5: "text-lg sm:text-xl",
        6: "text-base sm:text-lg",
    };

    const baseClasses = `font-semibold text-gray-900 dark:text-white mb-4 ${sizeClasses[level] || sizeClasses[6]}`;

    return (
        <HeadingTag className={`${baseClasses} ${className}`}>
            {title || children}
        </HeadingTag>
    );
};

export default HeadingTitle;