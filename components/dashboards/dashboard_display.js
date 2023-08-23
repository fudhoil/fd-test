import DashboardLayout from '@/layouts/dashboard_layout';
import React from 'react';
import TotalDisplay from './total_display';
import EarningChart from '../charts/earning_chart';

const DashboardDisplay = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-row flex-wrap justify-between w-full p-4 gap-4">
                <TotalDisplay
                    icon={<img src="/icons/trophy.svg" alt="total sales" />}
                    title="Total Sales"
                    value="$66,053" />
                <TotalDisplay
                    icon={<img src="/icons/calendar.svg" alt="total sales" />}
                    title="Total Sales"
                    value="$66,053" />
                <TotalDisplay
                    icon={<img src="/icons/calendar.svg" alt="this week" />}
                    title="This Week"
                    value="$35,000,00" />
                <TotalDisplay
                    icon={<img src="/icons/Group 402.svg" alt="revenue" />}
                    title="Revenue"
                    value="$63,00K" />
                <TotalDisplay
                    icon={<img src="/icons/wallet.svg" alt="wallet" />}
                    title="$1250"
                    value="Last payment" />

                <div>
                    <EarningChart />
                </div>
            </div>
        </DashboardLayout>
    );
}

export default DashboardDisplay;
