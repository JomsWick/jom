import React from 'react'
import Maintenance from '../Maintenance'

const Overview = ({ dark }) => {
    return (
        <div className="w-full h-[50vh] flex items-center justify-center overflow-hidden">
            <Maintenance dark={dark} />
        </div>
    );
};

export default Overview;