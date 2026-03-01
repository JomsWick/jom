import React from 'react'

const ProfileLink = ({ isActive }) => {
    return (
        <>
            <span className="text-xs font-light text-white pt-3 pb-1 px-2 w-full border-t border-t-black border-opacity-10">
                Main Menu
            </span>

            <MenuLink to={``} active={isActive(``)} icon="rr-dashboard" text="Dashboard" />
            <MenuLink to="/settings" active={isActive("/settings")} icon="rr-settings" text="Settings" />
        </>
    );
};

export default ProfileLink;