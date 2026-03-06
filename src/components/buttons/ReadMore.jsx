import React, { useState } from "react";

const ReadMore = ({ text = "", maxChars = 180, className = "", buttonClassName = "" }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!text) return null;

    const isLong = text.length > maxChars;
    const displayText = isExpanded || !isLong
        ? text
        : text.slice(0, maxChars) + "...";

    return (
        <p className={`leading-relaxed text-gray-500 dark:text-gray-300 ${className}`}>
            {displayText}
            {isLong && !isExpanded && "…"}{" "}
            {isLong && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`text-xs sm:text-sm md:text-base text-teal-600 dark:text-teal-400 hover:underline font-medium ml-1 ${buttonClassName}`}
                >
                    {isExpanded ? "Read less" : "Read more"}
                </button>
            )}
        </p>
    );
};

export default ReadMore;