import React from 'react'
import Section from '@/container/Section';
import ReadMore from '@/components/buttons/ReadMore';

const Overview = ({ profile, dark }) => {

    if (!profile) {
        return <p className="text-gray-400">No data available.</p>;
    }


    return (
            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-6">
                        <Section id="overview">
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
                    
                    <div className="lg:col-span-6 bg-gray-50/60 dark:bg-gray-900 p-6 rounded-lg shadow-xs">
                        <h5 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Availability</h5>
                        <ReadMore text={profile?.extras?.availability} />

                        <h5 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Talents</h5>
                        <ReadMore text={profile?.extras?.talents.join(", ")} />

                        <h5 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Hobbies</h5>
                        <ReadMore text={profile?.extras?.hobbies.join(", ")} />

                        <h5 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Sports</h5>
                        <ReadMore text={profile?.extras?.funFacts.join(", ")} />
                    </div>
                </div>
            </div>
    );
};

export default Overview;