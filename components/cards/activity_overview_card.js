import React from 'react';


const ActivityOverviewCard = ({ data }) => {
    return (

        <div className="flex flex-row gap-4 items-center justify-between">
            {/* TODO: create list of activities */}
            <div div className='relative flex h-10' >
                <img src='/icons/Ellipse 138.svg' alt='profile' className='w-[21px] h-[21px] rounded-full bg-[#1C243F] mb-auto' />
                {/* line */}
                <img src='/icons/line.svg' alt='line' className='absolute top-[20%] left-[50%] transform -translate-x-1/2 translate-y-[10px] h-[74px]' />
            </div >
            <div className="flex flex-col gap-1">
                <p className="text-[#fff] text-[14px] font-bold">{data?.action} {data?.to} {data?.description}</p>
                <p className="text-[#6C747D] text-[12px] font-normal">{data?.time}</p>
            </div>
        </div>
    );
};


ActivityOverviewCard.propTypes = {

};


export default ActivityOverviewCard;
