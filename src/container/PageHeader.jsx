import React, { useEffect, useRef, useState } from 'react';
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
    const [scrolled, setScrolled] = useState(false);
    const confirmLogoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerBg = scrolled
        ? bgColor ?? (dark ? 'bg-gray-900/90 shadow-md' : 'bg-white/90 shadow-md')
        : 'bg-transparent';
    const headerText = textColor ?? (
        dark 
            ? 'text-white'
            : scrolled 
                ? 'text-teal-600'
                : 'text-slate-300'
    );
    const subtitleText = dark ? 'text-gray-300' : 'text-slate-600';

    return (
        <div className={`
            fixed top-0 left-0 w-full z-50
            px-4 sm:px-6 lg:px-12
            py-3 sm:py-4
            ${headerBg} ${className ?? ''}
        `}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                    {(icon || logo) && (
                        <span className="flex items-center justify-center">
                            {icon ? (
                                <FlatIcon icon={icon} className={`text-2xl sm:text-3xl ${headerText}`} />
                                ) : typeof logo === 'string' ? (
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                />
                                ) : (
                                logo
                            )}
                        </span>
                    )}

                    <div className="flex flex-col leading-tight">
                        {dark ? (
                            <GradientText
                                colors={["#3AB0A1","#4DB6AC","#2C8C84"]}
                                animationSpeed={8}
                                showBorder={false}
                                className="text-lg sm:text-xl lg:text-2xl font-bold"
                            >
                                {title}
                            </GradientText>
                        ) : (
                            <h1 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 ${headerText}`}>
                                {title}
                            </h1>
                        )}

                        {subtitle && (
                            <span className={`text-xs sm:text-sm ${subtitleText}`}>
                                {subtitle}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default PageHeader;