import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useRef, useEffect, useState } from "react";

const ScrollBarMenu = ({ children, className = "" }) => {
    const scrollRef = useRef(null);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let timeout;
        const handleScroll = () => {
        setScrolling(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => setScrolling(false), 800);
        };

        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ScrollMenu
            scrollContainerClassName={`scrollbar-auto-hide ${scrolling ? "scrolling" : ""} ${className}`}
            ref={scrollRef}
        >
            {children}
        </ScrollMenu>
    );
};

export default ScrollBarMenu;