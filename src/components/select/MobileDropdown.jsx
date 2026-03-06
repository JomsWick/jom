import React, { useState } from "react";
import FlatIcon from "../icons/FlatIcon";

const MobileDropdown = ({ contents, selectedIndex, setSelectedIndex }) => {
    const [open, setOpen] = useState(false);

    const current = contents[selectedIndex].title;

    const getTitleContent = (title) => {
        if (!title) return { Icon: null, text: "" };
        if (typeof title === "object" && title.props) {
            return {
                Icon: title.props.icon || null,
                text: title.props.children || "",
            };
        }
        return { Icon: null, text: String(title) };
    };

    const { Icon: CurrentIcon, text: CurrentText } = getTitleContent(current);

    return (
        <div className="relative mb-3 w-full">
            <button
                onClick={() => setOpen(!open)}
                className={`w-full p-2 flex justify-between items-center 
                            bg-white dark:bg-gray-800 
                            border border-gray-300 dark:border-gray-700
                            text-gray-700 dark:text-white
                            transition-all duration-200
                            ${open ? "rounded-t-lg " : "rounded-lg"}`}
            >
                <span className="flex items-center gap-2">
                    {CurrentIcon && <CurrentIcon className="inline-block" />}
                    {CurrentText}
                </span>
                <span className="ml-2 transition-transform duration-200">
                    {open ? (
                        <FlatIcon icon="rr-caret-up" className="w-4 h-4" />
                    ) : (
                        <FlatIcon icon="rr-caret-down" className="w-4 h-4" />
                    )}
                </span>
            </button>

            <div
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out w-full rounded-b-md
                    ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                                rounded-b-lg shadow-lg mt-1">
                    {contents.map((tab, idx) => {
                        const { Icon, text } = getTitleContent(tab.title);
                        const isLast = idx === contents.length - 1;

                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    setSelectedIndex(idx);
                                    setOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 flex items-center gap-2
                                    ${
                                        idx === selectedIndex
                                            ? "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-white font-bold"
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }
                                    ${isLast ? "border-b border-gray-300 dark:border-gray-700 rounded-b-lg" : ""}`
                                }
                            >
                                {Icon && <Icon className="inline-block" />}
                                {text}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MobileDropdown;