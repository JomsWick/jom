import React from 'react'

const Overview = () => {
    return (
        <div className="min-h-screen bg-gray-100/70 flex items-center justify-center">
            <div className="text-center p-8 bg-white shadow-xl rounded-lg -mt-120">
                <h1 className="text-4xl font-semibold text-red-600">We'll Be Back Soon!</h1>
                <p className="text-lg text-gray-600 mt-4">
                    Our servers are currently undergoing maintenance. We'll be back online shortly. Thank you for your patience!
                </p>
                <div className="mt-6">
                    <span className="text-sm text-gray-500">Expected downtime: 1-2 hours</span>
                </div>
            </div>
      </div>
    );
};

export default Overview;