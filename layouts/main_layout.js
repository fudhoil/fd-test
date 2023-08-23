import DashboardDisplay from '@/components/dashboards/dashboard_display';
import Sidebar from '@/components/sidebar';
import React from 'react';

const MainLayout = ({
    children,
}) => {
    return (
        <div className='bg-[#151A2E] flex flex-row w-full'>
            <Sidebar />
            <DashboardDisplay />
        </div>
    );
}

export default MainLayout;
