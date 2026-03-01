export default function CoverPage({
    background,
    minHeight = "min-h-[60vh]",
    overlay = true,
    overlayColor = "bg-black/60",
    className = "",
    children,
    dark = false,
}) {
    return (
        <div className={`relative w-full ${minHeight} overflow-hidden ${className}`}>
            <img
                src={background}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {overlay && (
                <div className={`absolute inset-0 ${overlayColor}`} />
            )}

            <div className="relative z-10 w-full h-full flex items-center justify-center px-6 py-12">
                {children}
            </div>
        </div>
    );
}