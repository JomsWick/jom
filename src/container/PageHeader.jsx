import React, { useRef } from 'react';
import FlatIcon from '../components/icons/FlatIcon';
import ActionBtn from '@/components/buttons/ActionBtn';
import GradientText from '@/components/GradientText';

const PageHeader = ({
    children,
    title,
    icon,
    logo,
    subtitle,
    dark = false,
    bgColor,
    textColor,
    className
}) => {
    const confirmLogoutRef = useRef(null);

    const headerBg = bgColor ?? (dark ? 'bg-transparent border-b shadow-white/20' : 'bg-gray-50 shadow-xs');
    const headerText = textColor ?? (dark ? 'text-white' : 'text-slate-500');
    const subtitleText = dark ? 'text-gray-300' : 'text-slate-600';

    return (
        <div className={`fixed top-0 left-0 w-full px-5 py-4 z-50 ${headerBg} ${className ?? ''}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {(icon || logo) && (
                        <span className="p-1 flex items-center justify-center">
                            {icon
                                ? <FlatIcon icon={icon} className={`text-3xl ${headerText}`} />
                                : typeof logo === 'string'
                                    ? <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                                    : logo
                            }
                        </span>
                    )}
                    <div className="flex flex-col">
                        {dark ? (
                            <GradientText colors={["#3AB0A1","#4DB6AC","#2C8C84"]} animationSpeed={8} showBorder={false} className="text-xl font-bold custom-class">
                                {title}
                            </GradientText>
                        ) : (
                            <h1 className="text-xl font-bold text-slate-800">{title}</h1>
                        )}
                        {subtitle && (
                            <span className={`text-sm font-light ${dark ? 'text-gray-300' : 'text-slate-600'}`}>
                                {subtitle}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <ActionBtn
                        type="teal"
                        className="mr-16"
                        dark={dark}   // Pass down dark mode info for button
                    >
                        Hire Me
                    </ActionBtn>
                </div>
            </div>
            {children}
        </div>
    );
};

export default PageHeader;