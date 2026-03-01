import React from 'react';
import LiquidEther from './LiquidEther';

const LiquidEtherWrapper = ({ dark }) => {
    if (!dark) return null;

    return (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <LiquidEther
                colors={['#3AB0A1', '#4DB6AC', '#2C8C84']}
                mouseForce={20}
                cursorSize={100}
                isViscous
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                color0="#3AB0A1"
                color1="#4DB6AC"
                color2="#2C8C84"
            />
        </div>
    );
};

export default LiquidEtherWrapper;