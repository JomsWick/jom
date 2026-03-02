import React from 'react'

const Maintenance = ({ dark }) => {
    return (
        <div
            className={`
                flex items-center justify-center
                min-h-screen w-full overflow-hidden
                transition-colors duration-300
                ${dark ? 'bg-teal-700/5 text-white' : 'bg-teal-700 text-white'}
            `}
        >
            <div className="text-center px-6">
                <h1 className="text-5xl sm:text-6xl mb-4 animate-pulse">
                    ⚠️
                </h1>

                <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                    We are currently under maintenance
                </h2>

                <p className={`text-sm sm:text-base ${dark ? 'text-gray-400' : 'text-slate-200'}`}>
                    Please check back later.
                </p>
            </div>
        </div>
    );
};

export default Maintenance;