import React, { useEffect, useState } from 'react';
import PageHeader from '../container/PageHeader';
import LoadingScreen from '../components/indicator/LoadingScreen';
import LiquidEtherWrapper from '../components/backgrounds/LiquidEtherWrapper';
import ClickSpark from '@/components/ClickSpark';
import LogoDark from '../assets/logo/ja-dark-logo.png';
import LogoLight from '../assets/logo/ja-light-logo.jpg';

const Home = ({ dark }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    if (loading) return <LoadingScreen />;

    return (
        <div className={`relative w-full h-screen ${dark ? "bg-black" : "bg-white"}`}>
            <LiquidEtherWrapper dark={dark} />

            <div className="relative z-10 text-black dark:text-white overflow-visible">
                <ClickSpark
                    sparkColor="#fff"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                >
                    <div className="inline-block cursor-pointer dark:bg-transparent rounded-lg">
                        <PageHeader
                            logo={dark ? LogoDark : LogoLight}
                            title="My Profile"
                            dark={dark}
                            className="w-full"
                            textColor="text-teal-600"
                        />
                        <div>
                            
                        </div>
                        {data?.map(profile => (
                            <div key={profile.id} className="mt-2">
                                <h2>{profile.firstname} {profile.lastname}</h2>
                                <p>Email: {profile.email}</p>
                                <p>Position: {profile.position}</p>
                            </div>
                        ))}
                    </div>
                </ClickSpark>
            </div>
        </div>
    );
};

export default Home;