import { Link } from "react-router-dom";

const ActionBtn = (props) => {
    const {
        behavior,
        type = "primary",
        children,
        size = "md",
        disabled = false,
        loading = false,
        className = "",
        dark,
        ...rest
    } = props;

    const renderSize = () => {
        switch (size) {
        case "xs": return "py-[2px] text-[10px] px-2";
        case "sm": return "py-1 text-xs px-2";
        case "md": return "py-2 text-sm px-4";
        case "lg": return "py-3 text-sm px-6";
        case "xl": return "py-4 text-sm px-8";
        case "2xl": return "py-5 text-lg px-10";
        case "3xl": return "py-6 text-lg px-12";
        default: return "py-3 px-2";
        }
    };

    const renderType = () => {
        const disabledClass = disabled ? " focus:bg-slate-500 opacity-50 pointer-events-none" : "";

        if (dark) {
            switch (type) {
                case "primary": return `bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600/10 focus:bg-blue-600/20 ${disabledClass}`;
                case "secondary": return `bg-transparent border-2 border-indigo-700 text-indigo-700 hover:bg-indigo-700/10 focus:bg-indigo-700/20 ${disabledClass}`;
                case "teal": return `bg-transparent border-2 border-teal-900 text-teal-600 hover:bg-teal-600/10 focus:bg-teal-600/20 ${disabledClass}`;
                case "indigo": return `bg-indigo-800 border-2 border-indigo-800  hover:bg-indigo-900 focus:bg-indigo-900 text-white ${disabledClass}`;
                case "primary-dark": return `bg-primary-darker border-2 border-blue-700  hover:bg-blue-700 focus:bg-blue-700 text-white ${disabledClass}`;
                case "deep-purple": return `bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700/10 focus:bg-purple-700/20 ${disabledClass}`;
                case "transparent": return `bg-transparent hover:bg-gray-200 focus:bg-gray-300 text-slate-700 dark:text-white ${disabledClass}`;
                case "disabled": return `bg-slate-500 border-2 border-slate-500 hover:bg-slate-700 focus:bg-slate-500 text-black pointer-events-none ${disabledClass}`;
                case "foreground": return `bg-slate-100 border-2 border-slate-100 hover:bg-slate-300 focus:bg-slate-300 text-slate-500 ${disabledClass}`;
                case "foreground-dark": return `bg-slate-200 hover:bg-slate-400 focus:bg-slate-400 text-slate-600 ${disabledClass}`;
                case "success": return `bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600/10 focus:bg-green-600/20 ${disabledClass}`;
                case "danger": return `bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600/10 focus:bg-red-600/20 ${disabledClass}`;
                default: return `bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600/10 focus:bg-blue-600/20 ${disabledClass}`;
            }
        } else {
            switch (type) {
                case "primary": return `bg-primary-dark border-2 border-blue-600 hover:bg-primary-darker focus:bg-primary-dark text-white ${disabledClass}`;
                case "secondary": return `bg-indigo-700 border-2 border-indigo-700  hover:bg-indigo-900 focus:bg-indigo-900 text-white ${disabledClass}`;
                case "teal": return `bg-teal-900 border-2 border-teal-900 hover:bg-teal-700 focus:bg-teal-700 text-white ${disabledClass}`;
                case "blue-green": return `bg-[#009688] border-2 border-teal-900 hover:bg-[#00796b] focus:bg-[#00796b] text-white ${disabledClass}`;
                case "indigo": return `bg-indigo-800 border-2 border-indigo-800  hover:bg-indigo-900 focus:bg-indigo-900 text-white ${disabledClass}`;
                case "primary-dark": return `bg-primary-darker hover:bg-blue-700 focus:bg-blue-700 text-white ${disabledClass}`;
                case "deep-purple": return `bg-purple-700 border-2 border-purple-700 hover:bg-purple-800 focus:bg-purple-800 text-white ${disabledClass}`;
                case "transparent": return `bg-transparent border-2 border-gray-200 hover:bg-gray-200 focus:bg-gray-300 text-slate-700 dark:text-white ${disabledClass}`;
                case "disabled": return `bg-slate-500 border-2 border-slate-500 hover:bg-slate-700 focus:bg-slate-500 text-black pointer-events-none ${disabledClass}`;
                case "foreground": return `bg-slate-100 border-2 border-slate-100 hover:bg-slate-300 focus:bg-slate-300 text-slate-500 ${disabledClass}`;
                case "foreground-dark": return `bg-slate-200 border-2 border-slate-200 hover:bg-slate-400 focus:bg-slate-400 text-slate-600 ${disabledClass}`;
                case "success": return `bg-green-600 border-2 border-green-600 hover:bg-green-700 focus:bg-green-700 text-white ${disabledClass}`;
                case "danger": return `bg-red-600 border-2 border-red-600 hover:bg-red-700 focus:bg-red-700 text-white ${disabledClass}`;
                default: return `bg-primary border-2 border-blue-600 hover:bg-primary-darker focus:bg-primary-dark text-white ${disabledClass}`;
            }
        }
    };

    const btnClassName = () => `duration-200 flex items-center justify-center rounded-lg cursor-pointer ${renderSize()} ${renderType()}`;

    return behavior === "link" ? (
        <Link
            className={`duration-200 shadow-sm ${btnClassName()} ${className} ${loading ? "pointer-events-none opacity-50" : ""}`}
            {...rest}
        >
            {loading ? "Loading..." : children}
        </Link>
    ) : (
        <button
            className={`gap-1 duration-200 shadow-sm ${btnClassName()} ${className} ${loading ? "pointer-events-none opacity-50" : ""}`}
            {...rest}
        >
            {loading ? "Loading..." : children}
        </button>
    );
};

export default ActionBtn;