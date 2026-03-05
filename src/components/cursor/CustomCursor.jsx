import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const addHoverEvents = () => {
            document.querySelectorAll("button, a").forEach((el) => {
                el.addEventListener("mouseenter", () => setHovered(true));
                el.addEventListener("mouseleave", () => setHovered(false));
            });
        };

        window.addEventListener("mousemove", moveCursor);
        addHoverEvents();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            className={`fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-black/1 transition-transform duration-150
                ${hovered ? "scale-150 bg-red-500/1" : "scale-100"}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}