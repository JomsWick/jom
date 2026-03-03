import React from "react";

const Section = ({
    children,
    className = "",
    bg = "",
    id = "",
}) => {
    return (
        <section
            id={id}
            className={`
                w-full
                py-4 sm:py-20 lg:py-0
                px-4 sm:px-6 lg:px-0
                ${bg}
                ${className}
            `}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;