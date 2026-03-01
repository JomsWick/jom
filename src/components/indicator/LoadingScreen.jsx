import React, { useEffect, useRef } from "react";

const LoadingScreen = ({ duration = 3000, onComplete }) => {
    const barRef = useRef(null);
    const ballRef = useRef(null);
    const frameRef = useRef(null);

    let ballX = 0;
    let ballVel = 0;
    const SPRING = 12;
    const DAMPING = 6;

    useEffect(() => {
        let startTime = null;

        const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const targetProgress = Math.min((elapsed / duration) * 100, 100);

        const gap = targetProgress - ballX;
        const accel = gap * SPRING - ballVel * DAMPING;
        const dt = 0.016;
        ballVel += accel * dt;
        ballX += ballVel * dt;

        if (barRef.current) barRef.current.style.width = `${ballX}%`;
        if (ballRef.current)
            ballRef.current.style.left = `${ballX}%`;

        if (targetProgress < 100) {
            frameRef.current = requestAnimationFrame(animate);
        } else {
            if (onComplete) onComplete();
        }
        };

        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, [duration, onComplete]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
            <div className="relative w-96 h-6 bg-gray-900 rounded-full overflow-hidden shadow-lg">
                <div
                    ref={barRef}
                    className="absolute h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-300 to-pink-300 shadow-xl transition-[width] duration-75"
                    style={{ width: "0%" }}
                />
                <div
                ref={ballRef}
                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-400 blur-md shadow-2xl"
                style={{ left: "0%" }}
                />
            </div>
            <div className="mt-6 text-white font-semibold tracking-wide">
                Please wait...
            </div>
        </div>
    );
};

export default LoadingScreen;