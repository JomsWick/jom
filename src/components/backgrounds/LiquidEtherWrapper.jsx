import React from 'react';
import LiquidEther from './LiquidEther';

const LiquidEtherWrapper = ({ dark }) => {
    if (!dark) return null;

    return (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <LiquidEther
                colors={['#3AB0A1', '#4DB6AC', '#2C8C84']}
                mouseForce={10}
                cursorSize={100}
                isViscous
                viscous={30}
                iterationsViscous={16}
                iterationsPoisson={16}
                resolution={0.3}
                isBounce={false}
                autoDemo
                autoSpeed={0.3}
                autoIntensity={1.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                color0="#3AB0A1"
                color1="#4DB6AC"
                color2="#2C8C84"
                maxFPS={30}
            />
        </div>
    );
};

export default LiquidEtherWrapper;