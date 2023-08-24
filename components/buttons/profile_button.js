import React from 'react';

const ProfileButton = ({ name }) => {
    return (
        // TODO: make profile button component
        <button className="flex flex-row justify-center items-center gap-2 rounded-lg inter px-4 pb-2">
            <img src="/icons/profile-icon.png" alt="profile" className="w-[36px] h-[36px] rounded-full" />
            <p className="text-[#fff] text-[14px] font-medium">Hello, {name}!</p>
        </button>
    );
}

export default ProfileButton;
