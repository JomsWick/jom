import React, { useState } from 'react';

const Experience = ({ work_experience, dark }) => {
    const [expandedJob, setExpandedJob] = useState(null);

    if (!work_experience || Object.keys(work_experience).length === 0) {
        return (
            <div className="w-full h-[50vh] flex items-center justify-center overflow-hidden">
                <p className={`text-gray-400 ${dark ? "dark:text-gray-300" : ""}`}>
                    No experience data available.
                </p>
            </div>
        );
    }

    const experiences = Object.keys(work_experience)
        .map((key) => ({ id: key, ...work_experience[key] }))
        .sort((a, b) => (a.id === "latest" ? -1 : 1));

    const toggleDescription = (id) => {
        setExpandedJob(expandedJob === id ? null : id);
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {experiences.map((job) => {
                const isExpanded = expandedJob === job.id;
                return (
                    <div
                        key={job.id}
                        className={`p-5 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer ${
                            dark ? "bg-gray-800/5 text-white" : "bg-white text-gray-900"
                        }`}
                        onClick={() => toggleDescription(job.id)}
                    >
                        <div className="flex justify-between items-center">
                            <h5 className="font-semibold text-lg">{job.position}</h5>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {job.year}
                                </span>
                                {/* Chevron Icon */}
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        isExpanded ? "rotate-180" : "rotate-0"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{job.company}</p>
                        {job.description && isExpanded && (
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                {job.description}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Experience;