import React from 'react';

const ClientRetentionChart = () => {
    return (
        // TODO: change this img to real Chart
        <div className='bg-[#1C243F] px-[21.22px] rounded-lg flex flex-row flex-grow justify-between max-w-full gap-2 inter mt-3 h-full'>
            {/* <img src="/cards/client-retention-card.png" alt="client retention" className="max-w-full" /> */}
            <div className="flex flex-col lg:flex-row gap-5 w-full justify-between">
                <div className="flex flex-col gap-2 w-full py-[18.97px]">
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                        <p className="text-[#fff] text-[16.6px] font-medium">Client Retention</p>
                        <div className="flex flex-row gap-5 items-center">
                            <ProfitType type='1' text='Earning' />
                            <ProfitType type='2' text='Expenses' />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        {/* TODO: chart */}
                        here is the chart
                    </div>
                </div>
                {/* line */}
                <div className="hidden lg:block w-[1px] h-full bg-[#2E4B85]"></div>
                <div className="flex flex-col gap-4 items-center justify-between w-fit py-[18.97px]">
                    {/* TODO: dropdown */}
                    <div className="flex flex-row gap-2 text-[#0BB885]">
                        <p className="text-[10.72px] font-semibold
                        border border-[#0BB885] rounded-lg px-[13px] py-[5px]">2012</p>
                    </div>

                    <div className='flex flex-col gap-2 items-center'>
                        <p className="text-[#fff] text-[31.63px] font-bold">$842.98</p>
                        <p className="text-[#828282] text-[9.42px] font-medium">Latest Month Balance $426.20k</p>
                    </div>

                    {/* TODO: chart */}
                    here is the chart

                    <button className="flex flex-row items-center rounded-[4px] inter w-[118.32px] h-[32.87px] bg-[#0BB885] gap-[7.15px] justify-center">
                        <p className="text-[#fff] text-[12.51px] font-bold space-x-[0.36px]">View All</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

const ProfitType = ({ type, text }) => {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className={`w-[10.72px] h-[10.72px] rounded-full ${type === '1' ? 'bg-[#0BB885]' : 'bg-[#FF814A]'}`}></div>
            <p className="text-[#828282] text-[12.51px] font-medium">{text}</p>
        </div>
    );
}


export default ClientRetentionChart;
