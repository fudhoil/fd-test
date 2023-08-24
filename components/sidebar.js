import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-[#151A2E] min-h-screen flex flex-col">
            <div className="bg-[#171E37] overflow-hidden h-full w-[250px]">
                <div className="flex flex-col gap-3 p-[20px]">
                    <div className="flex flex-row gap-3">
                        <img src="/icons/logo.png" alt="logo" />
                    </div>
                    <div className="flex flex-col p-0 pt-[30px]">
                        <button className="flex flex-row gap-3 items-center bg-[#1F2849] py-4 px-[12px] rounded-lg">
                            <img className="h-[20px] w-[20px]" src="/icons/home.png" alt="home" />
                            <p className="text-[#6C747D] text-[16px] font-medium">Home</p>
                        </button>
                        <button className="flex flex-row gap-3 items-center hover:bg-[#1F2849] py-4 px-[12px] rounded-lg">
                            <img className="h-[20px] w-[20px]" src="/icons/reports.png" alt="reports" />
                            <p className="text-[#6C747D] text-[16px] font-medium">Reports</p>
                        </button>
                        <button className="flex flex-row gap-3 items-center hover:bg-[#1F2849] py-4 px-[12px] rounded-lg">
                            <img className="h-[20px] w-[20px]" src="/icons/notifications.png" alt="notifications" />
                            <p className="text-[#6C747D] text-[16px] font-medium">Notifications</p>
                            <img src="/icons/Frame 386.png" alt="notifications" className="ml-auto" />
                        </button>
                        <button className="flex flex-row gap-3 items-center hover:bg-[#1F2849] py-4 px-[12px] rounded-lg">
                            <img className="h-[20px] w-[20px]" src="/icons/settings.png" alt="settings" />
                            <p className="text-[#6C747D] text-[16px] font-medium">Settings</p>
                        </button>
                        <button className="flex flex-row gap-3 items-center hover:bg-[#1F2849] py-4 px-[12px] rounded-lg">
                            <img className="h-[20px] w-[20px]" src="/icons/logout.png" alt="logout" />
                            <p className="text-[#6C747D] text-[16px] font-medium">Log out</p>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
