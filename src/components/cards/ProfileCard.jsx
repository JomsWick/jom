import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

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
            <img
                src={profilePicture}
                alt={name}
                className={`w-28 h-28 rounded-full object-cover border-4 mb-4
                ${dark ? 'border-teal-500/70' : 'border-teal-600/70'}`}
            />

            <h2 className={`text-xl font-semibold mb-1 ${dark ? 'text-white' : 'text-gray-800'}`}>
                {name} {age && <span className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-500'}`}>({age})</span>}
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
                    <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl transition-transform duration-200 transform hover:scale-120 hover:text-teal-400`}
                        style={{ color: dark ? '#4fd1c5' : '#38b2ac' }}
                    >
                        <FaLinkedin />
                    </a>
                )}
                {social?.github && (
                    <a
                        href={social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl transition-transform duration-200 transform hover:scale-120 hover:text-teal-400`}
                        style={{ color: dark ? '#4fd1c5' : '#38b2ac' }}
                    >
                        <FaGithub />
                    </a>
                )}
                {social?.discord && (
                    <a
                        href={social.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl transition-transform duration-200 transform hover:scale-120 hover:text-teal-400`}
                        style={{ color: dark ? '#4fd1c5' : '#38b2ac' }}
                    >
                        <FaDiscord />
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;