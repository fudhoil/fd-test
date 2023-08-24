import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#151A2E] flex flex-row w-full p-4'>
            <div className='flex flex-row justify-center items-start gap-4'>
                {/* privacy policy */}
                <div className='flex flex-col flex-grow justify-center items-center'>
                    <p className='text-[#8A92A6] text-[12px] font-normal'>Privacy Policy</p>
                </div>
                {/* terms of service */}
                <div className='flex flex-col flex-grow justify-center items-center'>
                    <p className='text-[#8A92A6] text-[12px] font-normal'>Terms of Service</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
