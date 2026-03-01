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
import ReflectiveCard from '@/components/ReflectiveCard';
import ProfileImg from "../assets/images/profile-img.png"

const Home = ({ dark }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [disableCamera, setDisableCamera] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    if (loading) return <LoadingScreen />;

    const coverImg = dark ? coverDark : coverLight;

    const toggleCamera = () => {
        setDisableCamera(prevState => !prevState);
    };


    return (
        <div className={`relative w-full h-screen ${dark ? "bg-black" : "bg-white"}`}>
            <LiquidEtherWrapper dark={dark} />
            <CoverPage
                background={coverImg}
                minHeight="min-h-[20vh]"
                overlayColor="bg-transparent"
                className={`${dark ? "opacity-45" : "opacity-100"} top-20`}
            />

            <div className="relative z-10 text-black dark:text-white overflow-visible">
                <ClickSpark
                    sparkColor="#fff"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                >
                    <div className="w-full dark:bg-transparent rounded-lg">
                        <PageHeader
                            logo={dark ? LogoDark : LogoLight}
                            title="My Profile"
                            dark={dark}
                            className="w-full"
                            textColor="text-teal-600"
                        />
                        <div className="flex items-start space-x-6 gap-8">
                            <div className="ml-32" style={{ height: '600px', position: 'relative', top: '-20px' }}>
                                <ReflectiveCard
                                    overlayColor="rgba(0, 128, 128, 0.5)"
                                    blurStrength={12}
                                    glassDistortion={30}
                                    metalness={1}
                                    roughness={0.75}
                                    displacementStrength={20}
                                    noiseScale={1}
                                    specularConstant={5}
                                    grayscale={0.15}
                                    color="#ffffff"
                                    profilePicture={ProfileImg}
                                    disableCamera={true}
                                />
                            </div>
                            <div className="absolute top-20 left-112">
                                <TabGroup
                                    tabClassName="py-3 border-b shadow-xs"
                                    contentClassName="max-h-[unset]"
                                    contents={[
                                        { title: <MenuTitle src={FileIcon}>Overview</MenuTitle>, content: <Overview data={data} loading={!data} /> },
                                        { title: <MenuTitle src={UserIcon}>Profile</MenuTitle>, content: <Profile data={data} loading={!data} /> },
                                        { title: <MenuTitle src={EducationIcon}>Education</MenuTitle>, content: <Education data={data} loading={!data} /> },
                                        { title: <MenuTitle src={ExperienceIcon}>Experience</MenuTitle>, content: <Experience data={data} loading={!data} /> },
                                        { title: <MenuTitle src={PortfolioIcon}>Portfolio</MenuTitle>, content: <Portfolio data={data} loading={!data} /> },
                                    ]}
                                    dark={dark}
                                />
                            </div>
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