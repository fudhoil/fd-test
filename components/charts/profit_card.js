import React from 'react';

const ProfitCard = () => {
    return (
        // TODO: change this img to real Chart
        <div className='bg-[#1C243F] px-[21.22px] py-[18.97px] rounded-lg flex flex-col flex-grow justify-between gap-2 inter'>
            {/* <img src="/cards/growth-card.png" alt="growth" className="w-full" /> */}
            <div className="flex flex-col gap-2">
                <p className="text-[#fff] text-[16.6px] font-medium">Profit</p>
                <span className="text-[#0BB885] text-[28.46px] font-medium">8,24K</span>
            </div>

            {/* TODO: chart */}
            here is the chart
        </div>
    );
}

export default ProfitCard;
