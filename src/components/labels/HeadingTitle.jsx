import React from "react";

const HeadingTitle = ({ title, children, level = 6, className = "" }) => {
    const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}`;

    const baseClasses = "font-semibold text-gray-900 dark:text-white mb-4";

    return (
        <HeadingTag className={`${baseClasses} ${className}`}>
            {title || children}
        </HeadingTag>
    );
};

export default HeadingTitle;