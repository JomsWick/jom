import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import SocialIcon from '../icons/SocialIcon';
import ShinyText from '../labels/ShinyText';

const ProfileCard = ({ profile, dark }) => {
    const {
        profilePicture,
        name,
        age,
        position,
        location,
        followers,
        likes,
        photos,
        social,
    } = profile;

    return (
        <div className={`w-full max-w-xs rounded-xl p-6 flex flex-col items-center text-center
            transition-colors duration-300
            ${dark ? 'bg-gray-900/50 text-white shadow-xl' : 'bg-white text-gray-800 shadow-lg'}`}
        >
            <div className="relative w-28 h-28 mb-4 rounded-full p-0.75">
                <div
                    className="absolute inset-0 rounded-full animate-spin-slow"
                    style={{
                    background: dark
                        ? 'conic-gradient(from 0deg, #2dd4bf, #14b8a6, #0f766e, #2dd4bf)'
                        : 'conic-gradient(from 0deg, #5eead4, #14b8a6, #0f766e, #5eead4)',
                    }}
                />
                <div className={`absolute inset-0.75 rounded-full overflow-hidden ${dark ? 'bg-gray-900' : 'bg-white'}`}>
                    <img
                        src={profilePicture}
                        alt={name}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>

            <h2 className={`text-xl font-semibold mb-1 ${dark ? 'text-white' : 'text-gray-800'}`}>
                <ShinyText>{name}</ShinyText> {age && <span className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-500'}`}>({age})</span>}
            </h2>

            {position && (
                <p className={`text-sm mb-1 ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {position}
                </p>
            )}

            {location && (
                <p className={`text-xs mb-4 ${dark ? 'text-gray-400' : 'text-gray-400'}`}>
                    {location}
                </p>
            )}

            <div className={`w-full flex justify-center space-x-4 border-t pt-4 mt-2
                ${dark ? 'border-gray-700' : 'border-gray-200'}`}
            >
                {followers !== undefined && (
                    <div className="flex flex-col items-center">
                        <span className={`font-semibold ${dark ? 'text-white' : 'text-gray-800'}`}>{followers}</span>
                        <span className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Followers</span>
                    </div>
                )}
                {likes !== undefined && (
                    <div className="flex flex-col items-center">
                        <span className={`font-semibold ${dark ? 'text-white' : 'text-gray-800'}`}>{likes}</span>
                        <span className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Likes</span>
                    </div>
                )}
                {photos !== undefined && (
                    <div className="flex flex-col items-center">
                        <span className={`font-semibold ${dark ? 'text-white' : 'text-gray-800'}`}>{photos}</span>
                        <span className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Photos</span>
                    </div>
                )}
                {social?.linkedin && (
        <SocialIcon
            href={social.linkedin}
            label="LinkedIn"
            Icon={FaLinkedin}
            dark={dark}
        />
    )}

    {social?.github && (
        <SocialIcon
            href={social.github}
            label="GitHub"
            Icon={FaGithub}
            dark={dark}
        />
    )}

    {social?.discord && (
        <SocialIcon
            href={social.discord}
            label="Discord"
            Icon={FaDiscord}
            dark={dark}
        />
    )}
            </div>
        </div>
    );
};

export default ProfileCard;