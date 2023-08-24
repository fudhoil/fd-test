import React from 'react';
import ActivityOverviewCard from '../cards/activity_overview_card';

const percentage = 16;

const data = [
    {
        id: 1,
        name: 'Jan',
        action: 'Mentioned',
        to: 'Sara Smith',
        description: 'In New Post',
        time: '11 JUL 8:30PM',
    },
    {
        id: 2,
        name: 'Ron',
        action: 'Commented',
        to: 'Your Post',
        description: 'Nice Work!',
        time: '12 JUL 5:30PM',
    },
    {
        id: 3,
        name: 'Sara Smith',
        action: 'Liked',
        to: 'Your Post',
        description: '',
        time: '15 JUL 8:20PM',
    },
    {
        id: 4,
        name: 'Sara Smith',
        action: 'Liked',
        to: 'Your Post',
        description: '',
        time: '12 JUL 1:20PM',
    },
    {
        id: 5,
        name: 'Sara Smith',
        action: 'Liked',
        to: 'Your Post',
        description: '',
        time: '10 JUL 3:33PM',
    }
]

const ActivityOverview = () => {
    return (
        // TODO: change this img to real Chart
        <div className='bg-[#1C243F] rounded-lg px-[32px] py-[27px] flex flex-col flex-grow justify-between min-w-fit gap-2 inter min-h-fit'>
            {/* <img src="/cards/activity-overview-card.png" alt="activity overview" className="w-full" /> */}
            <div className="flex flex-col gap-2">
                <p className="text-[#D3D3D3] text-[20px] font-bold">Activity Overview</p>
                <div className="flex flex-row gap-2 items-center">
                    {/* arrow */}
                    <img src="/icons/arrow-up.svg" alt="arrow up" className="w-[24px] h-[24px] mt-[2px]" />
                    <p className="text-[#fff] text-[14px] font-medium"><span className='text-[16px] text-[#5C6CA5] font-normal'>{percentage}% this month</span></p>
                </div>
            </div>

            <div className="flex flex-col gap-8 items-start overflow-hidden my-2 py-7">
                {data.map((item, index) => (
                    <ActivityOverviewCard data={item} key={item?.id} />
                ))}
            </div>
        </div>
    );
}

export default ActivityOverview;

