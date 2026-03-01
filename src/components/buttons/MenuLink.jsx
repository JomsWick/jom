import React from 'react'
import { Link } from 'react-router-dom';
import FlatIcon from '../icons/FlatIcon';

const MenuLink = () => {
    return (
        <Link to={to} {...rest}>
            <div
                className={`bg-black bg-opacity-0 hover:bg-opacity-10 cursor-pointer py-4 px-4 flex items-center text-slate-50 gap-3 duration-200 ${
                    active ? "bg-opacity-10!" : ""
                }`}
            >
                {icon && (
                    <span className="flex items-center">
                        <FlatIcon icon={icon} />
                    </span>
                )}
                <span className="text-sm font-medium">{text}</span>
                {counter > 0 && (
                    <div className="relative">
                        <span className="bg-red-600 animate-ping absolute text-white w-full h-full rounded-full z-10"></span>
                        <span className="bg-red-600 text-white z-20 px-2 rounded-full">{counter}</span>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default MenuLink;