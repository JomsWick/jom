export default function CoverPage({
    background,
    minHeight = "min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh]",
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

        <div className="
            relative z-10
            w-full h-full
            flex items-center justify-center
            px-4 sm:px-6 lg:px-12
            py-8 sm:py-12 lg:py-16
        ">
            {children}
        </div>
        </div>
    );
}