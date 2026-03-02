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
import FileIcon from '../assets/icons/file.png';
import UserIcon from '../assets/icons/user.png';
import EducationIcon from '../assets/icons/mortarboard.png';
import ExperienceIcon from '../assets/icons/user-experience.png';
import PortfolioIcon from '../assets/icons/portfolio.png';
import ProfileImg from "../assets/images/profile-img.png"
import ProfileCard from '@/components/cards/ProfileCard';
import { fetchProfiles } from '@/libs/api/profileApi';
import { calculateAge, capitalizeName, capitalizePreposition, completeAddress, fullNameWithInitial } from '@/libs/helpers';
import SkillsCard from '@/components/cards/SkillsCard';
import ActionBtn from '@/components/buttons/ActionBtn';

const Home = ({ dark }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [disableCamera, setDisableCamera] = useState(false);
    
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetchProfiles().then((data) => {
        setProfiles(data);
        setLoading(false);
        });
    }, []);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    if (loading) return <LoadingScreen />;

    const coverImg = dark ? coverDark : coverLight;

    const toggleCamera = () => {
        setDisableCamera(prevState => !prevState);
    };


    return (
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
                                                        lg:w-[82%]
                                                        xl:w-[82%] 
                                                        text-xs sm:text-sm px-3 sm:px-5 py-2
                                                    "
                                                >
                                                    Hire Me
                                                </ActionBtn>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-8 lg:col-span-9">
                                <TabGroup
                                    tabClassName="py-3 border-b text-xs sm:text-sm md:text-base lg:text-lg"
                                    contentClassName=""
                                    contents={[
                                        { title: <MenuTitle src={FileIcon}>Overview</MenuTitle>, content: <Overview data={data} loading={!data} dark={dark} /> },
                                        { title: <MenuTitle src={UserIcon}>Profile</MenuTitle>, content: <Profile data={data} loading={!data} /> },
                                        { title: <MenuTitle src={EducationIcon}>Education</MenuTitle>, content: <Education data={data} loading={!data} /> },
                                        { title: <MenuTitle src={ExperienceIcon}>Experience</MenuTitle>, content: <Experience data={data} loading={!data} /> },
                                        { title: <MenuTitle src={PortfolioIcon}>Portfolio</MenuTitle>, content: <Portfolio data={data} loading={!data} /> },
                                    ]}
                                    dark={dark}
                                />
                            </div>
                        </div>
                    </div>
                </ClickSpark>
            </div>
        </div>
    );
};

export default Home;