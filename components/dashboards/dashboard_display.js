import ContentLayout from '@/layouts/content_layout';
import React from 'react';
import TotalDisplay from './total_display';
import EarningChart from '../charts/earning_chart';
import OrderChart from '../charts/order_chart';
import ProfitCard from '../charts/profit_card';
import ActivityOverview from '../charts/activity_overview';
import ClientRetentionChart from '../charts/client_retention_chart';

const DashboardDisplay = () => {
    return (
        <ContentLayout>
            {/* <div className="flex flex-wrap gap-3 p-4"> */}
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 p-4 grid-flow-dense">
                <div className="col-span-full">
                    <div className='flex flex-wrap gap-3'>
                        <TotalDisplay
                            icon={<img src="/icons/calendar.svg" alt="total sales" />}
                            title="Total Sales"
                            value="$66,053"
                            type="primary" />
                        <TotalDisplay
                            icon={<img src="/icons/trophy.svg" alt="total sales" />}
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
                    </div>
                </div>

                <div className="col-span-full lg:col-span-3 lg:row-start-2 lg:col-start-1">
                    <div className="flex flex-wrap gap-3">
                        <EarningChart />
                        <OrderChart />
                        <ProfitCard />
                    </div>
                    <ClientRetentionChart />
                </div>
                <div className="col-span-full lg:row-start-2 lg:col-start-4">
                    <ActivityOverview />
                </div>
            </div>
        </ContentLayout>
    );
}

export default DashboardDisplay;
