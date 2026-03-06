import React from "react";

const ShinyText = ({ children, className = "" }) => {
    return (
        <span
            className={`
                relative inline-block
                text-gray-700 dark:text-gray-400
                ${className}
            `}
        >
            <span
                className="
                absolute inset-0
                bg-[linear-gradient(120deg,transparent_35%,rgba(255,255,255,0.4)_50%,transparent_65%)]
                dark:bg-[linear-gradient(120deg,transparent_35%,rgba(255,255,255,0.35)_50%,transparent_65%)]
                bg-[length:200%_100%]
                animate-[shine_3s_linear_infinite]
                bg-clip-text
                text-transparent
                pointer-events-none
                "
            >
                {children}
            </span>

            {children}
        </span>
    );
};

export default ShinyText;