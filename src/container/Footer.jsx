import React from "react";

const Footer = ({ profile, dark, className = "" }) => {
    if (!profile) {
        return <p className="text-gray-400">No data available.</p>;
    }

    return (
        <footer
            className={`
                w-full
                border-t
                py-10
                px-4 sm:px-6 lg:px-8
                ${dark ? "bg-black-950/30 text-white border-neutral-800/20" : "bg-gray-100 text-gray-800 border-gray-200/20"}
                ${className}
            `}
        >
            <div className="max-w-7xl mx-auto flex flex-col space-y-8 md:grid md:grid-cols-3 md:gap-8 text-center md:text-left">
                
                <div>
                    <h3 className="text-xl font-semibold mb-3">{profile.project}</h3>
                    <p className="text-sm opacity-70">
                        Building modern and scalable web experiences.
                    </p>
                </div>

                <div>
                <h4 className="font-medium mb-3">Navigation</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="hover:opacity-70">About</a></li>
                    <li><a href="#projects" className="hover:opacity-70">Projects</a></li>
                    <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
                </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-3">Connect</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:opacity-70">LinkedIn</a></li>
                        <li><a href="#" className="hover:opacity-70">GitHub</a></li>
                        <li><a href="#" className="hover:opacity-70">Twitter</a></li>
                    </ul>
                </div>

            </div>

            <div className="text-center text-xs opacity-60 mt-10">
                © {new Date().getFullYear()} {profile.firstname} {profile.lastname}. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;