import React from 'react'
import Section from '@/container/Section';
import ReadMore from '@/components/buttons/ReadMore';
import HeadingTitle from '@/components/labels/HeadingTitle';
import PieChart from '@/components/charts/PieChart';


const Overview = ({ profile, dark }) => {

    if (!profile) {
        return <p className="text-gray-400">No data available.</p>;
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-6 shadow-sm p-5 rounded-xl bg-white dark:bg-gray-800/5">
                    <Section id="overview" className="">
                        <h5 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            About Me
                        </h5>
                        <ReadMore text={profile?.about_me} />

                        <h5 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                            What Inspires Me
                        </h5>
                        <ReadMore text={profile?.inspire} />

                        <h5 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                            How I Work Best
                        </h5>
                        <ReadMore text={profile?.work_best} />

                        <h5 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
                            My Personality / Approach
                        </h5>
                        <ReadMore text={profile?.personality} />
                    </Section>
                </div>
                
                <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center p-5 bg-white dark:bg-gray-800/5 rounded-lg shadow hover:shadow-md transition-shadow">
                        <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                            <svg
                                className="w-6 h-6 text-teal-500 dark:text-teal-300"
                                fill="none"
                                stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"></path>
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                            </svg>
                        </div>
                        <div className="ml-4">
                        <h6 className="font-semibold text-gray-900/5 dark:text-white">Availability</h6>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{profile?.extras?.availability?.availabilityDetails}</p>
                        </div>
                         <div className="flex flex-col items-center justify-center w-16 h-16 px-4 sm:p-x1 mx-0.5 bg-teal-100 dark:bg-teal-900 rounded-lg shadow">
                            <span className="text-xs text-teal-600 dark:teal-blue-300 uppercase">{new Date().toLocaleString('default', { month: 'short' })}</span>
                            <span className="text-xl font-bold text-teal-800 dark:text-white">{new Date().getDate()}</span>
                        </div>
                    </div>
                    

                    <div className="p-5 bg-white dark:bg-gray-800/5 rounded-lg shadow">
                        <HeadingTitle title="Talents" level={6} />

                        {profile?.extras?.talents && profile.extras.talents.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                {profile.extras.talents.map((talent, idx) => {
                                    const percent = talent.level;

                                    let barColor = "bg-red-500";
                                    if (percent >= 80) barColor = "bg-teal-500";
                                    else if (percent >= 60) barColor = "bg-orange-300";

                                    return (
                                        <div key={idx}>
                                            <div className="flex justify-between mb-1 text-gray-600 text-xs dark:text-white">
                                                <span>{talent.name}</span>
                                                <span>{percent}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className={`${barColor} h-2 rounded-full transition-all duration-1000`}
                                                    style={{ width: `${percent}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p className="text-gray-400 dark:text-gray-500">No talents data available.</p>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <div className="p-5 bg-white dark:bg-gray-800/5 rounded-lg shadow">
                            <h6 className="font-semibold text-gray-900 dark:text-white mb-3">Hobbies</h6>
                            <div className="flex flex-wrap gap-2">
                                {profile?.extras?.hobbies.map((hobby, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-gray-500 dark:text-slate-50 rounded-full text-sm font-medium"
                                    >
                                        {hobby}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-5 bg-white dark:bg-gray-800/5 rounded-lg shadow">
                            <h6 className="font-semibold text-gray-900 dark:text-white mb-3">Sports</h6>
                            <div className="flex flex-wrap gap-2">
                                {profile?.extras?.sports.map((sport, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                                    >
                                        {sport}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-5 bg-white dark:bg-gray-800/5 rounded-lg shadow">
                        <h6 className="font-semibold text-gray-900 dark:text-white mb-3">Fun Facts</h6>
                        {profile?.extras?.funFacts?.length > 0 ? (
                            <PieChart
                            title="Fun Facts"
                            data={{
                                day: profile.extras.funFacts.map(f => ({ status: f, count: 1 })),
                                week: profile.extras.funFacts.map(f => ({ status: f, count: 1 })),
                                month: profile.extras.funFacts.map(f => ({ status: f, count: 1 })),
                                year: profile.extras.funFacts.map(f => ({ status: f, count: 1 })),
                            }}
                            />
                        ) : (
                            <p className="text-gray-400 dark:text-gray-500">No fun facts available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;