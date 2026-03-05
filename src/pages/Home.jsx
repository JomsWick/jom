import React, { useEffect, useState } from 'react';
import PageHeader from '../container/PageHeader';
import LoadingScreen from '../components/indicator/LoadingScreen';
import LiquidEtherWrapper from '../components/backgrounds/LiquidEtherWrapper';
import ClickSpark from '@/components/ClickSpark';
import LogoDark from '../assets/logo/ja-dark-logo.png';
import LogoLight from '../assets/logo/ja-light-logo.jpg';
import CoverPage from '@/components/image/CoverPage';
import coverLight from "../assets/cover/cover.jpg";
import coverDark from "../assets/cover/cover.png";
import TabGroup from '@/components/buttons/TabGroup';
import MenuTitle from '@/components/menu/MenuTitle';
import Overview from './profile-tab/Overview';
import Profile from './profile-tab/Profile';
import Education from './profile-tab/Education';
import Experience from './profile-tab/Experience';
import Portfolio from './profile-tab/Portfolio';
import ProfileImg from "../assets/images/profile-img.png"
import ProfileCard from '@/components/cards/ProfileCard';
import { fetchProfiles } from '@/libs/api/profileApi';
import { calculateAge, capitalizeName, completeAddress, fullNameWithInitial } from '@/libs/helpers';
import SkillsCard from '@/components/cards/SkillsCard';
import ActionBtn from '@/components/buttons/ActionBtn';
import AppLayout from '@/container/AppLayout';
import { FaBriefcase, FaGraduationCap, FaRegFileAlt, FaRegImages, FaRegUser } from 'react-icons/fa';
import Footer from '@/container/Footer';

const Home = ({ dark }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const loadProfiles = async () => {
            try {
                const data = await fetchProfiles();
                setProfiles(data);
            } catch (error) {
                console.error("Failed to fetch profiles:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProfiles();
    }, []);

    if (loading) return <LoadingScreen />;

    const coverImg = dark ? coverDark : coverLight;

    return (
        <AppLayout disableContainer disablePadding>
            <div className={`relative w-full min-h-screen overflow-hidden ${dark ? "bg-black" : "bg-white"}`}>
                <LiquidEtherWrapper dark={dark} />
                <CoverPage
                    background={coverImg}
                    minHeight="min-h-[16vh] sm:min-h-[18vh] md:min-h-[21vh]"
                    overlayColor="bg-transparent"
                    className={`${dark ? "opacity-45" : "opacity-100"}`}
                />

                <div className="relative z-10 text-black dark:text-white">
                    <ClickSpark
                        sparkColor="#fff"
                        sparkSize={10}
                        sparkRadius={15}
                        sparkCount={8}
                        duration={400}
                    >
                        <div className="w-full">
                            <PageHeader
                                logo={dark ? LogoDark : LogoLight}
                                title="My Profile"
                                dark={dark}
                                className="w-full"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 sm:px-6 lg:px-12">
                                <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start lg:ml-6 xl:ml-12">
                                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                                        {profiles.map(profile => (
                                            <div key={profile.id} className="mb-4 flex flex-col items-center gap-4">
                                                <ProfileCard
                                                    profile={{
                                                        profilePicture: profile.avatar || ProfileImg,
                                                        name: fullNameWithInitial(profile.firstname, profile.middlename, profile.lastname),
                                                        age: calculateAge(profile.birthdate),
                                                        position: capitalizeName(profile.job_title),
                                                        location: completeAddress(profile.address),
                                                        social: {
                                                            linkedin: 'https://www.linkedin.com/in/jomswick/',
                                                            github: 'https://github.com/JomsWick',
                                                            discord: 'https://discord.com/users/538617488439771146'
                                                        }
                                                    }}
                                                    dark={dark}
                                                />

                                                <SkillsCard skills={profile.skills} dark={dark} />
                                                <div className="w-full flex justify-center">
                                                    <ActionBtn
                                                        type="teal"
                                                        dark={dark}
                                                        className="
                                                            w-full
                                                            sm:w-[82%]
                                                            md:w-[95%]
                                                            lg:w-[95%]
                                                            xl:w-[90%]
                                                            2xl:w-[74%]
                                                            3xl:w-[85%]
                                                            text-xs sm:text-sm px-3 sm:px-5 py-2
                                                            cursor-target
                                                        "
                                                    >
                                                        Hire Me
                                                    </ActionBtn>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:col-span-8 lg:col-span-9 mb-4">
                                    <TabGroup
                                        tabClassName="py-3 border-b text-xs sm:text-sm md:text-base lg:text-lg"
                                        contentClassName=""
                                        contents={[
                                            { title: <MenuTitle icon={FaRegFileAlt}>Overview</MenuTitle>, content: <Overview profile={profiles[0]} dark={dark} /> },
                                            { title: <MenuTitle icon={FaRegUser}>Profile</MenuTitle>, content: <Profile profile={profiles[0]} dark={dark} /> },
                                            { title: <MenuTitle icon={FaGraduationCap}>Education</MenuTitle>, content: <Education data={data} dark={dark} loading={!data} /> },
                                            { title: <MenuTitle icon={FaBriefcase}>Experience</MenuTitle>, content: <Experience data={data} loading={!data} dark={dark} /> },
                                            { title: <MenuTitle icon={FaRegImages}>Portfolio</MenuTitle>, content: <Portfolio data={data} loading={!data} dark={dark} /> },
                                        ]}
                                        dark={dark}
                                    />
                                </div>
                            </div>
                            <Footer profile={profiles[0]} dark={dark} />
                        </div>
                    </ClickSpark>
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;