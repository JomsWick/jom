import React from 'react';

const SkillsCard = ({ skills, dark }) => {
    if (!skills) return null;

    const categories = [
        { title: 'Frameworks', items: skills.frameworks?.split(',').map(s => s.trim()) || [] },
        { title: 'Programming Languages', items: skills.programming_languages?.split(',').map(s => s.trim()) || [] },
        { title: 'Tools', items: skills.tools?.split(',').map(s => s.trim()) || [] },
    ];

    return (
        <div
            className={`w-full max-w-xs rounded-xl p-6 flex flex-col items-center text-center
                transition-colors duration-300
                ${dark ? 'bg-gray-900/50 text-white shadow-xl' : 'bg-white text-gray-800 shadow-lg'}`}
        >
            <h3 className={`text-md font-semibold mb-2 ${dark ? 'text-white' : 'text-gray-800'}`}>
                Expertise & Skills
            </h3>

            <div className="w-full flex flex-col gap-3">
                {categories.map((category, idx) => (
                    <div key={idx} className="text-center">
                        <h4 className={`text-xs font-semibold mb-2 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {category.title}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-2">
                            {category.items.map((skill, sidx) => (
                                <span
                                    key={sidx}
                                    className={`px-3 py-1 rounded-full text-xs font-medium
                                        ${dark ? 'bg-teal-600/50 text-white' : 'bg-slate-50/80 text-teal-800'}`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;