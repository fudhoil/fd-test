import React from 'react';
import ProfileButton from './buttons/profile_button';

const page_title = "Marketing Dashboard";

const Header = () => {
    return (
        <>
            <div className='flex flex-col justify-between items-center w-full h-[48px] mt-[12px]'>
                <div className="flex flex-row justify-end items-center w-full">
                    <ProfileButton name="John Doe" />
                </div>
                {/* line */}
                <div className="bg-[#4B5259] w-full h-[1px]" />
            </div>
            <div className="flex flex-col justify-between items-start w-full mb-4" id="header_title">
                <h1 className="text-[#fff] text-[30px] font-semibold p-4 pb-2">{page_title}</h1>
                {/* breadcrumb */}
                {/* TODO: make breadcrumb component */}
                <div className="flex flex-row gap-2 px-4">
                    <p className="text-[#6C747D] text-[14px] font-medium">Home</p>
                    <span className='text-[#6C747D] text-[14px] font-medium'>/</span>
                    <p className="text-[#6C747D] text-[14px] font-medium">Dashboard</p>
                </div>
            </div>
        </>
    );
}

export default Header;
