import React, { useState } from "react";

const ReadMore = ({ text = "", maxChars = 180 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!text) return null;

    const isLong = text.length > maxChars;
    const displayText = isExpanded || !isLong
        ? text
        : text.slice(0, maxChars) + "...";

    return (
         <p className="leading-relaxed text-gray-500 dark:text-gray-300">
            {displayText}
            {isLong && !isExpanded && "…"}{" "}
            {isLong && (
                <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-teal-600 dark:text-teal-400 hover:underline font-medium ml-1"
                >
                {isExpanded ? "Read less" : "Read more"}
                </button>
            )}
        </p>
    );
};

export default ReadMore;